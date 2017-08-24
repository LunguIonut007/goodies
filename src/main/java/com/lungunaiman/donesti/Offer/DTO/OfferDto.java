package com.lungunaiman.donesti.Offer.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OfferDto {

    private Integer id;
    private String title;
    private String description;

    //NULL IF NOT IN GOOD DTO
    private Boolean requested;
}
