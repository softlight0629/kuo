package im.kuo.web.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.web.context.request.NativeWebRequest;

public class SimpleSignInAdapter implements SignInAdapter{

    @Override
    public String signIn(String userId, Connection<?> connection, NativeWebRequest request) {
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(userId, null)
        );
        return null;
    }
}
