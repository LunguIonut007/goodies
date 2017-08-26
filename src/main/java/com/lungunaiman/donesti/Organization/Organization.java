package com.lungunaiman.donesti.Organization;

import com.lungunaiman.donesti.Generic.GenericEntity;
import com.lungunaiman.donesti.Users.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Organization extends GenericEntity {

    private String address;
    private String phone;

    @Column(name = "admin_name")
    private String adminName;

    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
