package com.lungunaiman.donesti;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;

    private String description;
}
