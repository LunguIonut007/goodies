package com.lungunaiman.donesti.Generic;

import com.lungunaiman.donesti.Utils.AuthUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

public abstract class GenericController<T extends GenericEntity> {

    public abstract GenericService<T> getService();

    public abstract int getOwnerUserId(Object entity);

    @Autowired protected AuthUtils authUtils;

    @GetMapping("/{id}")
    public Response getOne(@PathVariable int id) {
        T entity = getService().getRepository().findOne(id);
        if(!authUtils.isOfUser(getOwnerUserId(entity))) return Response.getErrorResponse();

        return new Response(getService().mapToBasicDtoClass(entity));
    }

    @GetMapping
    public Response getAll() {
        //TODO: Get all for USER
        return new Response(getService().getAll());
    }

    @PostMapping
    public Response create(@RequestBody T entity) {
        return new Response(getService().create(entity));
    }

    @PutMapping
    public Response update(@RequestBody T entity) {
        Object e = getService().getRepository().findOne(entity.getId());
        if(!authUtils.isOfUser(getOwnerUserId(e))) return Response.getErrorResponse();

        return new Response(getService().update(entity));
    }

    @DeleteMapping("/{id}")
    public Response delete(@PathVariable int id) {
        Object e = getService().getRepository().findOne(id);
        if(!authUtils.isOfUser(getOwnerUserId(e))) return Response.getErrorResponse();
        getService().delete(id);
        return new Response(null);
    }

}
