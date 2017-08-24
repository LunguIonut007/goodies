package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Proposal.DTO.ProposalDto;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProposalService extends GenericService<Proposal> {

    @Autowired private ProposalRepository proposalRepository;

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
                new BooleanBuilder().and(QProposal.proposal.donor.user.id.eq(authUtils.getUser().getId()))
        );
        System.out.println(authUtils.getUser().getId());
        List<ProposalDto> dtoList = new ArrayList<>();
        for(Proposal proposal : list) {
            System.out.println("!");
            dtoList.add(modelMapper.map(proposal, ProposalDto.class));
        }

        return new Response(dtoList);
    }
}
