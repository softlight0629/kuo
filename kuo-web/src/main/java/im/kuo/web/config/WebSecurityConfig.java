package im.kuo.web.config;

import im.kuo.web.security.KuoAuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.filter.CompositeFilter;

import javax.servlet.Filter;
import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableOAuth2Client
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{


//    @Autowired
//    private OAuth2ClientContext oAuth2ClientContext;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/*.html", "/js/**", "/static/**", "/resources/**","/resources/public/**", "/**/*.js");
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
//                .antMatchers("/", "/home", "/login", "/register", "/connect/**", "/signin/**").permitAll()
                .anyRequest().permitAll();
//                .and()
//                .formLogin()
//                .loginPage("/login")
//                .defaultSuccessUrl("/welcome")
//                .permitAll();

//        http.csrf().disable()
//                .authorizeRequests()
//                .anyRequest().permitAll();
    }

    @Bean
    public TextEncryptor textEncryptor() {
        return Encryptors.noOpText();
    }
//    @Bean
//    @ConfigurationProperties("github")
//    public ClientResources github() {
//        return new ClientResources();
//    }
//
//    @Bean
//    public FilterRegistrationBean oauth2ClientFilterRegistration(OAuth2ClientContextFilter filter) {
//        FilterRegistrationBean registration = new FilterRegistrationBean();
//        registration.setFilter(filter);
//        registration.setOrder(-100);
//        return registration;
//    }


//    private Filter ssoFilter() {
//        CompositeFilter compositeFilter = new CompositeFilter();
//        List<Filter> filters = new ArrayList<>();
//        filters.add(ssoFilter(github(), "/login/github"));
//        compositeFilter.setFilters(filters);
//
//        return compositeFilter;
//    }
//
//    private Filter ssoFilter(ClientResources client, String path) {
//        OAuth2ClientAuthenticationProcessingFilter oAuth2ClientAuthenticationProcessingFilter = new OAuth2ClientAuthenticationProcessingFilter(path);
//        OAuth2RestTemplate oAuth2RestTemplate = new OAuth2RestTemplate(client.getClient(), oAuth2ClientContext);
//        oAuth2ClientAuthenticationProcessingFilter.setRestTemplate(oAuth2RestTemplate);
//        UserInfoTokenServices tokenServices = new UserInfoTokenServices(client.getResource().getUserInfoUri(), client.getClient().getClientId());
//        tokenServices.setRestTemplate(oAuth2RestTemplate);
//        oAuth2ClientAuthenticationProcessingFilter.setTokenServices(tokenServices);
//        return oAuth2ClientAuthenticationProcessingFilter;
//    }
//
//
//    class ClientResources {
//
//        @NestedConfigurationProperty
//        private AuthorizationCodeResourceDetails client = new AuthorizationCodeResourceDetails();
//
//        @NestedConfigurationProperty
//        private ResourceServerProperties resource = new ResourceServerProperties();
//
//        public AuthorizationCodeResourceDetails getClient() {
//            return client;
//        }
//
//        public ResourceServerProperties getResource() {
//            return resource;
//        }
//    }

}
