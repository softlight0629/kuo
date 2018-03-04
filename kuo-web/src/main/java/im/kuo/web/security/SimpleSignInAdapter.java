package im.kuo.web.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.web.context.request.NativeWebRequest;
import org.thymeleaf.extras.springsecurity4.auth.AuthUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SimpleSignInAdapter implements SignInAdapter{

    @Override
    public String signIn(String userId, Connection<?> connection, NativeWebRequest request) {
        UserProfile userProfile = connection.fetchUserProfile();
        String username = userProfile.getUsername();
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, null);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "http://100.72.192.136/api";
    }
}
