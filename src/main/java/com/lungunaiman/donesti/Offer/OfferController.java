package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/offer")
public class OfferController extends GenericController<Offer> {

    @Autowired private OfferService offerService;

    @Override
    public GenericService<Offer> getService() {
        return offerService;
    }
    @GetMapping("/{id}")
    public Response getOne(@PathVariable int id) {
        // if(!authUtils.isOfUser(userId)) return Response.getErrorResponse();

        return new Response(offerService.getOne(id));
    }

    @PostMapping
    public Response create(@RequestBody Offer offer) {
        return new Response(getService().create(offer));
    }

    @PutMapping
    public Response update(@RequestBody Offer offer) {
        return new Response(getService().update(offer));
    }
}
