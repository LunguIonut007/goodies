package com.lungunaiman.donesti.Users;

import com.lungunaiman.donesti.Donor.Donor;
import com.lungunaiman.donesti.Organization.Organization;
import lombok.Data;

@Data
public class Register {
    private User user;
    private Donor donor;
    private Organization organization;
}
