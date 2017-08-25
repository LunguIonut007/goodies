package com.lungunaiman.donesti.Utils;

import com.lungunaiman.donesti.Configuration.security.UserPrincipal;
import com.lungunaiman.donesti.Donor.Donor;
import com.lungunaiman.donesti.Donor.DonorRepository;
import com.lungunaiman.donesti.Donor.QDonor;
import com.lungunaiman.donesti.Organization.Organization;
import com.lungunaiman.donesti.Organization.OrganizationRepository;
import com.lungunaiman.donesti.Organization.QOrganization;
import com.lungunaiman.donesti.Users.User;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthUtils {

    @Autowired private DonorRepository donorRepository;
    @Autowired private OrganizationRepository organizationRepository;

    public User getUser() {
        return ((UserPrincipal)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
    }

    public Organization getOrganization() {
        return organizationRepository.findOne(
                new BooleanBuilder(QOrganization.organization.user.id.eq(getUser().getId()))
        );
    }

    public Donor getDonor() {
        return donorRepository.findOne(
                new BooleanBuilder(QDonor.donor.user.id.eq(getUser().getId()))
        );
    }

    public boolean isOfUser(int userId) {
        return getUser().getId() == userId;
    }

}
