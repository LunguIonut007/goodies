package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public List<OfferDto> getOwn() {
        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QOffer qOffer = QOffer.offer;
        List<OfferDto> dtoList = new ArrayList<>();
        booleanBuilder.and(qOffer.user.id.eq(this.authUtils.getUser().getId()));
        Iterable<Offer> list = offerRepository.findAll(booleanBuilder);

        for(Offer offer : list) {
            dtoList.add(this.modelMapper.map(offer, OfferDto.class));
        }
        return dtoList;
    }
}
