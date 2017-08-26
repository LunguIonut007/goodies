package com.lungunaiman.donesti.Organization.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OfferOrganizationDto {
    private Integer id;
    private String title;
    private String description;
    private Boolean requested;
    private Boolean sent;
    private ProposalOrganizationDto proposal;
}
