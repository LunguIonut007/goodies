package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericEntity;
import com.lungunaiman.donesti.Users.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Data
@Entity
public class Offer extends GenericEntity {

    private String title;
    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
