package im.kuo.web;

import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "im.kuo")
@EntityScan(basePackages = "im.kuo.model")
public class KuoWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(KuoWebApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(UserRepository userRepository) {

        return (args) -> {
            userRepository.save(new User("13957781827", "123456"));
        };
    }
}
