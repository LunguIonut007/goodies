package com.lungunaiman.donesti.Organization;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Organization.DTO.OrganizationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrganizationService extends GenericService<Organization> {

    @Autowired private OrganizationRepository organizationRepository;
    @Override
    public GenericRepository<Organization> getRepository() {
        return organizationRepository;
    }

    @Override
    public Class<?> getBaseDtoClass() {
        return OrganizationDto.class;
    }
}
