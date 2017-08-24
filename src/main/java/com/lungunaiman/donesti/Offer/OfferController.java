package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Users.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    @Override
    public Response getAll() {
        if(this.authUtils.getUser().getEntityType() != EntityType.ORGANIZATION_ADMIN) return null;
        return offerService.getAllForOrganization();
    }

    @GetMapping("/getOwn")
    public Response getAllOwn() {
        return new Response(offerService.getOwn());
    }

   // @GetMapping("/get")
}
