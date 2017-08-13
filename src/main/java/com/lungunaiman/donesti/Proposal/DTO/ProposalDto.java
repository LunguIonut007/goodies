package com.lungunaiman.donesti.Proposal.DTO;

import lombok.Data;

@Data
public class ProposalDto {

    private int organizationId;
    private boolean pending;
    private boolean accepted;
}
