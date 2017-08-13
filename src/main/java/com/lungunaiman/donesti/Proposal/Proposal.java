package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericEntity;
import com.lungunaiman.donesti.Users.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Proposal extends GenericEntity {

    @Column(name = "ORGANIZATION_ID")
    private int organizationId;

    private boolean pending;

    private boolean accepted;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
