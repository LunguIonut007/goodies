package com.lungunaiman.donesti.Offer;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Offer.DTO.OfferDto;
import com.lungunaiman.donesti.Organization.DTO.OfferOrganizationDto;
import com.lungunaiman.donesti.Organization.DTO.ProposalOrganizationDto;
import com.lungunaiman.donesti.Organization.Organization;
import com.lungunaiman.donesti.Organization.OrganizationService;
import com.lungunaiman.donesti.Organization.QOrganization;
import com.lungunaiman.donesti.Proposal.Proposal;
import com.lungunaiman.donesti.Proposal.ProposalService;
import com.lungunaiman.donesti.Proposal.QProposal;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OfferService extends GenericService<Offer> {

    @Autowired private OfferRepository offerRepository;
    @Autowired private OrganizationService organizationService;
    @Autowired private ProposalService proposalService;

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


    @Override
    public Object create(Offer entity) {
        entity.setUser(authUtils.getUser());
        return super.create(entity);
    }

    public Response getAllForOrganization() {
        BooleanBuilder booleanBuilder;
        QProposal qProposal = QProposal.proposal;

        Organization organization = organizationService.getRepository().findOne(
                new BooleanBuilder().and(QOrganization.organization.user.id.eq(
                        this.authUtils.getUser().getId()
                ))
        );

        List<Offer> list = this.getRepository().findAll();
        List<OfferOrganizationDto> dtoList = new ArrayList<>();
        OfferOrganizationDto offerDto;
        Proposal proposal;

        for(Offer offer : list) {
            booleanBuilder = new BooleanBuilder()
                    .and(qProposal.organization.id.eq(organization.getId()))
                    .and(qProposal.offer.id.eq(offer.getId()));
            proposal = proposalService.getRepository().findOne(booleanBuilder);
            offerDto = this.modelMapper.map(offer, OfferOrganizationDto.class);
            offerDto.setRequested(proposal != null);
            if(proposal != null)
                offerDto.setProposal(this.modelMapper.map(proposal, ProposalOrganizationDto.class));
            dtoList.add(offerDto);
        }
        return new Response(dtoList);
    }
}
