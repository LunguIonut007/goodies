package com.lungunaiman.donesti.Organization.DTO;

import com.lungunaiman.donesti.Users.DTO.UserDto;
import lombok.Data;

@Data
public class OrganizationDto {

    private String id;
    private String address;
    private String phone;
    private String adminName;
    private UserDto user;
}
