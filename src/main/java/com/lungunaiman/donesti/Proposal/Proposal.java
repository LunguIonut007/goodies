package com.lungunaiman.donesti.Proposal;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Proposal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "ORGANIZATION_ID")
    private int organizationId;

    private boolean pending;

    private boolean accepted;
}
