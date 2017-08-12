package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
public class Proposal extends GenericEntity {

    @Column(name = "ORGANIZATION_ID")
    private int organizationId;

    private boolean pending;

    private boolean accepted;
}
