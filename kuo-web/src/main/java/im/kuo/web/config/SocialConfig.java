package im.kuo.web.config;

import im.kuo.core.repository.UserRepository;
import im.kuo.web.security.ProviderConnectionSignup;
import im.kuo.web.security.SimpleSignInAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.connect.*;
import org.springframework.social.connect.jdbc.JdbcUsersConnectionRepository;
import org.springframework.social.connect.support.ConnectionFactoryRegistry;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.social.connect.web.ConnectInterceptor;
import org.springframework.social.connect.web.ProviderSignInController;
import org.springframework.social.github.api.GitHub;
import org.springframework.social.github.connect.GitHubConnectionFactory;
import org.springframework.util.MultiValueMap;
import org.springframework.web.context.request.WebRequest;

import javax.inject.Inject;
import javax.sql.DataSource;

@Configuration
@EnableSocial
public class SocialConfig {

    @Inject
    private Environment environment;

    @Inject
    private DataSource dataSource;

    @Inject
    private TextEncryptor textEncryptor;

    @Inject
    private UserRepository userRepository;


    @Bean
    public ProviderSignInController providerSignInController() {
        ProviderSignInController controller =  new ProviderSignInController(connectionFactoryLocator(), usersConnectionRepository(), new SimpleSignInAdapter());
        controller.setApplicationUrl("http://100.72.192.136/api");

        return controller;
    }

    @Bean
    public ConnectionFactoryLocator connectionFactoryLocator() {
        ConnectionFactoryRegistry registry = new ConnectionFactoryRegistry();

        registry.addConnectionFactory(new GitHubConnectionFactory(
                environment.getProperty("github.client.clientId"),
                environment.getProperty("github.client.clientSecret")
        ));

        return registry;
    }

    @Bean
    @Scope(value="request", proxyMode= ScopedProxyMode.INTERFACES)
    public ConnectionRepository connectionRepository() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null) {
            throw new IllegalStateException("Unable to get a ConnectionRepository: no user signed in");
        }

        return usersConnectionRepository().createConnectionRepository(authentication.getName());
    }

    @Bean
    public UsersConnectionRepository usersConnectionRepository() {
        JdbcUsersConnectionRepository repository =
                new JdbcUsersConnectionRepository(dataSource, connectionFactoryLocator(), textEncryptor);

        repository.setConnectionSignUp(new ProviderConnectionSignup(userRepository));
        return repository;
    }


    @Bean
    public ConnectController connectController() {
        ConnectController controller =  new ConnectController(connectionFactoryLocator(), connectionRepository());

        controller.addInterceptor(new GithubConnectInterceptor());
        return controller;
    }

    public class GithubConnectInterceptor implements ConnectInterceptor<GitHub> {

        @Override
        public void preConnect(ConnectionFactory<GitHub> connectionFactory, MultiValueMap<String, String> parameters, WebRequest request) {

        }

        @Override
        public void postConnect(Connection<GitHub> connection, WebRequest request) {
            System.out.println("I'm connecting......");
        }
    }
}
