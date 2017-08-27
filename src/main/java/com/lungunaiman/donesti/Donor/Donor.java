package com.lungunaiman.donesti.Donor;

import com.lungunaiman.donesti.Generic.GenericEntity;
import com.lungunaiman.donesti.Users.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Data
@Entity
public class Donor extends GenericEntity {

    private String address;
    private String phone;

    private Double latitude;
    private Double longitude;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
