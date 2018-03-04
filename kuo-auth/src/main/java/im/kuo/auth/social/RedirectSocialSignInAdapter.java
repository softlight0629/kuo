package im.kuo.auth.social;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionKey;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.NativeWebRequest;

import javax.inject.Inject;

@Component
public class RedirectSocialSignInAdapter implements SignInAdapter{

    @Inject
    private ConnectionRepository connectionRepository;

    @Override
    public String signIn(String userId, Connection<?> connection, NativeWebRequest request) {
        ConnectionKey connectionKey = connection.getKey();

        return "http://100.72.192.136/auth/oauth/token?grant_type=social&client_id=SimpleClientId&client_secret=secret&connect_id=" + connectionKey.getProviderId()+ "&connect_secret=" + connectionKey.getProviderUserId();
    }
}
