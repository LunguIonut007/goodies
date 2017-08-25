package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericController;
import com.lungunaiman.donesti.Generic.GenericService;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Proposal.DTO.ProposalCreateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

        return proposal.getOffer().getUser().getId();
    }

    @RequestMapping("/getOwn")
    public Response getOwn() {
        return proposalService.getAllOwn();
    }

    @PostMapping("/{id}/deny")
    public Response deny(@PathVariable Integer id) {
        proposalService.deny(id);
        return new Response();
    }

    @PostMapping("/{id}/accept")
    public Response accept(@PathVariable  Integer id, @RequestBody Proposal proposal) {
        proposalService.accept(id, proposal.getMessage());

        return new Response();
    }

    @PostMapping("/create")
    public Response create(@RequestBody ProposalCreateDto entity) {
        return proposalService.create(entity);
    }
}
