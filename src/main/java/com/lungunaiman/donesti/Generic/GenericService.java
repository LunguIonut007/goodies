package com.lungunaiman.donesti.Generic;

import com.lungunaiman.donesti.Utils.AuthUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
public abstract class GenericService<T extends GenericEntity> {

    public abstract GenericRepository<T> getRepository();

    public abstract Class<?> getBaseDtoClass();

    @Autowired protected AuthUtils authUtils;
    protected ModelMapper modelMapper;

    public GenericService() {
        this.modelMapper = new ModelMapper();
    }

    public Object create(T entity) {
        entity.setId(0);
        return modelMapper.map(getRepository().save(entity), getBaseDtoClass());
    }

    public Object update(T entity) {
        if(getRepository().findOne(entity.getId()) == null) return null;

        return modelMapper.map(getRepository().save(entity), getBaseDtoClass());
    }

    public<E> E getOne(int id, Class<E> eClass) {
        return modelMapper.map(getRepository().findOne(id), eClass);
    }

    public Object getOne(int id) {
        return getOne(id, getBaseDtoClass());
    }

    public void delete(int id) {
        getRepository().delete(id);
    }

}
