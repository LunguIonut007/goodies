package com.lungunaiman.donesti.Users;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    private String password;
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "ENTITY_TYPE")
    private EntityType entityType;
}
