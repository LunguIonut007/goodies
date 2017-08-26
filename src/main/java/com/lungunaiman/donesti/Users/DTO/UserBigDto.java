package com.lungunaiman.donesti.Users.DTO;

import com.lungunaiman.donesti.Users.EntityType;
import lombok.Data;

@Data
public class UserBigDto {

    private int id;
    private String name;
    private String email;
    private EntityType entityType;
}
