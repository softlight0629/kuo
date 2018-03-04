package im.kuo.auth.social;

import im.kuo.core.repository.UserOauthProviderRepository;
import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import im.kuo.model.user.auth.UserOauthProvider;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionKey;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.social.connect.UserProfile;
import org.springframework.stereotype.Component;

import javax.inject.Inject;

@Component
public class ProviderConnectionSignup implements ConnectionSignUp {

    @Inject
    private UserRepository userRepository;

    @Inject
    private UserOauthProviderRepository userOauthProviderRepository;


    @Override
    public String execute(Connection<?> connection) {
        UserProfile profile = connection.fetchUserProfile();
        ConnectionKey connectionKey = connection.getKey();

        UserOauthProvider userOauthProvider =
                this.userOauthProviderRepository.findByProviderIdAndProviderUserId(connectionKey.getProviderId(), connectionKey.getProviderUserId());

        // 创建一个账号
        if (userOauthProvider == null) {
            User user = new User();
            user.setAvatar(connection.getImageUrl());
            user.setNickName(profile.getUsername());

            user = userRepository.save(user);

            userOauthProvider = new UserOauthProvider();
            userOauthProvider.setProviderId(connectionKey.getProviderId());
            userOauthProvider.setProviderUserId(connectionKey.getProviderUserId());
            userOauthProvider.setUserId(user.getId());

            userOauthProviderRepository.save(userOauthProvider);
        }

        return profile.getUsername();
    }
}
