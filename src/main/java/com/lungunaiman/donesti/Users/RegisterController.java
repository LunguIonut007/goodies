package com.lungunaiman.donesti.Users;

import com.lungunaiman.donesti.Donor.DonorRepository;
import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Organization.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired private OrganizationRepository organizationRepository;

    @Autowired private DonorRepository donorRepository;

    @Autowired private UserRepository userRepository;

    @PostMapping
    public Response register(@RequestBody  Register register) {
        if( userRepository.findByEmail(register.getUser().getEmail()) != null )
            return null; // TODO: return error
        User user = userRepository.save(register.getUser());

        if(register.getDonor() != null) {
            register.getDonor().setUser(user);
            register.getUser().setEntityType(EntityType.DONOR);
            return new Response(donorRepository.save(register.getDonor()));
        }

        register.getOrganization().setUser(user);
        register.getUser().setEntityType(EntityType.ORGANIZATION_ADMIN);
        return new Response(organizationRepository.save(register.getOrganization()));
    }
}
