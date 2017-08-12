package com.lungunaiman.donesti.Users;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    private String name;
    private String password;
    private String email;
}
