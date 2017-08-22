package com.lungunaiman.donesti.Configuration.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lungunaiman.donesti.Utils.AuthUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Service;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired private AuthUtils authUtils;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
                                        HttpServletResponse httpServletResponse,
                                        Authentication authentication) throws IOException, ServletException {
        ObjectMapper objectMapper = new ObjectMapper();
        httpServletResponse.setStatus(200);
        httpServletResponse.setHeader("Content-Type","application/json;charset=UTF-8");
        httpServletResponse.getOutputStream().println(objectMapper.writeValueAsString(authUtils.getUser()));
    }
}
