package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericEntity;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Offer extends GenericEntity {

    private String title;
    private String description;
}
