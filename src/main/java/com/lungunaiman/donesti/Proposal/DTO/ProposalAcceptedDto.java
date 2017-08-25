package com.lungunaiman.donesti.Proposal.DTO;

import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import lombok.Data;

@Data
public class ProposalAcceptedDto {

    private int id;
    private OfferDto offer;
    private String message;
}
