package com.lungunaiman.donesti.Generic;

import com.lungunaiman.donesti.Utils.AuthUtils;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class GenericController<T extends GenericEntity> {

    public abstract GenericService<T> getService();

    @Autowired protected AuthUtils authUtils;

}
