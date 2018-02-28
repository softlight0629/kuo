package im.kuo.web.security;

import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.social.connect.UserProfile;

public class ProviderConnectionSignup implements ConnectionSignUp {

    private UserRepository userRepository;

    public ProviderConnectionSignup(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public String execute(Connection<?> connection) {
        UserProfile profile = connection.fetchUserProfile();

        User user = new User(profile.getUsername(), profile.getLastName());
        userRepository.save(user);

        return profile.getUsername();
    }
}
