package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Donor.Donor;
import com.lungunaiman.donesti.Donor.DonorRepository;
import com.lungunaiman.donesti.Donor.QDonor;
import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Offer.Offer;
import com.lungunaiman.donesti.Offer.OfferService;
import com.lungunaiman.donesti.Organization.Organization;
import com.lungunaiman.donesti.Proposal.DTO.ProposalAcceptedDto;
import com.lungunaiman.donesti.Proposal.DTO.ProposalCreateDto;
import com.lungunaiman.donesti.Proposal.DTO.ProposalDto;
import com.lungunaiman.donesti.Proposal.DTO.UserSmallProposalDto;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProposalService extends GenericService<Proposal> {

    @Autowired private ProposalRepository proposalRepository;
    @Autowired private OfferService offerService;
    @Autowired private DonorRepository donorRepository;

    @Override
    public GenericRepository<Proposal> getRepository() {
        return proposalRepository;
    }

    @Override
    public Class<?> getBaseDtoClass() {
        return ProposalDto.class;
    }

    public Response getAllOwn() {
        Iterable<Proposal> list = proposalRepository.findAll(
                new BooleanBuilder().and(QProposal.proposal.offer.user.id.eq(authUtils.getUser().getId()))
        );

        List<ProposalDto> dtoList = new ArrayList<>();
        for(Proposal proposal : list) {

            dtoList.add(modelMapper.map(proposal, ProposalDto.class));
        }

        return new Response(dtoList);
    }

    public Response getAllAcceptedProposalsForOrg() {
        QProposal qProposal = QProposal.proposal;
        Organization organization = authUtils.getOrganization();
        Iterable<Proposal> list = proposalRepository.findAll(
                new BooleanBuilder(qProposal.organization.id.eq(organization.getId()))
                    .and(qProposal.accepted.eq(true))
        );

        List<ProposalAcceptedDto> dtoList = new ArrayList<>();
        ProposalAcceptedDto proposalDto;
        Donor donor;
        for(Proposal proposal : list) {
            proposalDto = modelMapper.map(proposal, ProposalAcceptedDto.class);
            donor = donorRepository.findOne(
                    new BooleanBuilder(QDonor.donor.user.id.eq(proposal.getOffer().getUser().getId()))
            );
            proposalDto.setLatitude(donor.getLatitude());
            proposalDto.setLongitude(donor.getLongitude());
            proposalDto.setUser(modelMapper.map(proposal.getOffer().getUser(), UserSmallProposalDto.class));
            dtoList.add(proposalDto);
        }

        return new Response(dtoList);
    }

//    public Response getUsersForChat() {
//        QProposal qProposal = QProposal.proposal;
//        Organization organization = authUtils.getOrganization();
//        Iterable<Proposal> list = proposalRepository.findAll(
//                new BooleanBuilder(qProposal.organization.id.eq(organization.getId()))
//                        .and(qProposal.accepted.eq(true))
//        );
//
//
//    }

    public void deny(int id) {
        Proposal proposal = proposalRepository.findOne(id);

        if(!proposal.isPending()) return; //throw error

        proposal.setAccepted(false);
        proposal.setPending(false);
        proposalRepository.save(proposal);
    }

    public void accept(int id,String message) {
        Proposal proposal = proposalRepository.findOne(id);
        Iterable<Proposal> list = proposalRepository.findAll(
                new BooleanBuilder(QProposal.proposal.offer.id.eq(proposal.getOffer().getId()))
        );
        if(!proposal.isPending()) return; //throw error

        for(Proposal proposal1 : list) {
            proposal1.setPending(false);
            proposal1.setAccepted(false);
            proposalRepository.save(proposal1);
        }

        proposal.setAccepted(true);
        proposal.setPending(false);
        proposal.setMessage(message);
        proposal.getOffer().setSent(true);
        proposalRepository.save(proposal);
    }

    public Response create(ProposalCreateDto entity) {
        Organization organization = authUtils.getOrganization();
        Proposal testProposal = proposalRepository.findOne(
                new BooleanBuilder(QProposal.proposal.offer.id.eq(entity.getOfferId()))
                .and(QProposal.proposal.organization.id.eq(organization.getId()))
        );

        if(testProposal != null) return Response.getErrorResponse();

        Offer offer = offerService.getRepository().findOne(entity.getOfferId());

        if(offer.isSent()) return Response.getErrorResponse();

        Proposal proposal = new Proposal();
        proposal.setOffer(offer);
        proposal.setOrganization(organization);
        proposalRepository.save(proposal);
        return new Response(modelMapper.map(proposal, ProposalDto.class));
    }

    @Override
    public Object create(Proposal entity) {
        // to prevent workaround of business logic
        throw new NotImplementedException();
    }
}
