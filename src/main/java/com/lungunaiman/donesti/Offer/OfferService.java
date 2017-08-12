package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfferService extends GenericService<Offer> {

    @Autowired private OfferRepository offerRepository;

    @Override
    public GenericRepository<Offer> getRepository() {
        return offerRepository;
    }

    @Override
    public Class<?> getBaseDtoClass() {
        return OfferDto.class;
    }
}
