package com.lungunaiman.donesti.Utils;

import com.lungunaiman.donesti.Configuration.security.UserPrincipal;
import com.lungunaiman.donesti.Users.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthUtils {

    public User getUser() {
        return ((UserPrincipal)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
    }

    public boolean isOfUser(int userId) {
        return getUser().getId() == userId;
    }
}
