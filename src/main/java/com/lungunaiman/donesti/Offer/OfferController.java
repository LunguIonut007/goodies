package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}