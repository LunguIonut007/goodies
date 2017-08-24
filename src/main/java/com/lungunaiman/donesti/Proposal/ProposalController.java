package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/proposal")
public class ProposalController extends GenericController<Proposal> {

    @Autowired private ProposalService proposalService;


    @Override
    public GenericService<Proposal> getService() {
        return proposalService;
    }

    @Override
    public int getOwnerUserId(Object entity) {
        Proposal proposal = (Proposal) entity;

        return proposal.getDonor().getUser().getId();
    }

    @RequestMapping("/getOwn")
    public Response getOwn() {
        return proposalService.getAllOwn();
    }
}
