package com.lungunaiman.donesti.Users;

import com.lungunaiman.donesti.Generic.Response;
import com.lungunaiman.donesti.Utils.AuthUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired private AuthUtils authUtils;

    @GetMapping
    private Response getCurrentUser() {
        return new Response(authUtils.getUser());
    }
}
