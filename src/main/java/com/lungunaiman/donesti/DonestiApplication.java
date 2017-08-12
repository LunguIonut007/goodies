package com.lungunaiman.donesti;

import com.lungunaiman.donesti.Proposal.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DonestiApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DonestiApplication.class, args);
	}

	@Autowired private ProposalRepository proposalRepository;


    @Override
    public void run(String... strings) throws Exception {
    }
}
