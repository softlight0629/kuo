package im.kuo.auth.token;

import im.kuo.auth.exception.UserOauthProviderNotFoundException;
import im.kuo.core.repository.UserOauthProviderRepository;
import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import im.kuo.model.user.auth.UserOauthProvider;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import javax.inject.Inject;

@Component
public class SocialAuthenticationProvider implements AuthenticationProvider{

    @Inject
    private UserRepository userRepository;

    @Inject
    private UserOauthProviderRepository userOauthProviderRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String connectId = authentication.getName();
        String connectSecret = authentication.getCredentials().toString();

        UserOauthProvider userOauthProvider =
                userOauthProviderRepository.findByProviderIdAndProviderUserId(connectId, connectSecret);

//
//        if (userOauthProvider == null) {
//            throw new UserOauthProviderNotFoundException("user ");
//        }

        User user = userRepository.findOne(userOauthProvider.getUserId());

        return new UsernamePasswordAuthenticationToken(user.getNickName(), user.getPassword(), null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(SocialTokenAuthenticationToken.class);
    }
}
