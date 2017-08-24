package com.lungunaiman.donesti.Proposal.DTO;

import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import lombok.Data;

@Data
public class ProposalDto {

    private int id;
    private OrganizationProposalDto organization;
    private boolean pending;
    private boolean accepted;
    private OfferDto offer;
}
