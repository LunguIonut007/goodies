package com.lungunaiman.donesti;

import com.lungunaiman.donesti.Proposal.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DonestiApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DonestiApplication.class, args);
	}

	@Autowired private ProposalRepository proposalRepository;



	@GetMapping("/")
	public String home() {
		return "You did it!";
	}

    @Override
    public void run(String... strings) throws Exception {
        System.out.println(proposalRepository.findOne(1).getOrganizationId());
    }
}
