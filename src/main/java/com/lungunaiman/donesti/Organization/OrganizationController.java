package com.lungunaiman.donesti.Organization;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cause")
public class OrganizationController extends GenericController<Organization> {

    @Autowired private OrganizationService organizationService;

    @Override
    public GenericService<Organization> getService() {
        return organizationService;
    }

    @Override
    public int getOwnerUserId(Object entity) {
        Organization org = (Organization)entity;

        return org.getUser().getId();
    }
}
