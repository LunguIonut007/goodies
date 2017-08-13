package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericRepository;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Proposal.DTO.ProposalDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
