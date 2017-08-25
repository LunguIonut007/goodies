package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericEntity;
import com.lungunaiman.donesti.Offer.Offer;
import com.lungunaiman.donesti.Organization.Organization;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Data
@Entity
public class Proposal extends GenericEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORGANIZATION_ID")
    private Organization organization;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OFFER_ID")
    private Offer offer;

    private boolean pending = true;

    private boolean accepted;

    private String message = "";
}
