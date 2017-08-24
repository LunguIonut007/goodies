package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/offer")
public class OfferController extends GenericController<Offer> {

    @Autowired private OfferService offerService;

    @Override
    public GenericService<Offer> getService() {
        return offerService;
    }

    @Override
    public int getOwnerUserId(Object entity) {
        Offer offer = (Offer) entity;

        return offer.getUser().getId();
    }

    @GetMapping("/getOwn")
    public List<OfferDto> getAllOwn() {
        return offerService.getOwn();
    }
}
