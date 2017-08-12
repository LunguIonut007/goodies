package com.lungunaiman.donesti.Utils;

import com.lungunaiman.donesti.Users.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthUtils {

    public User getUser() {
        return (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    public boolean isOfUser(int userId) {
        if(getUser().getId() == userId) return true;

        return false;
    }
}
