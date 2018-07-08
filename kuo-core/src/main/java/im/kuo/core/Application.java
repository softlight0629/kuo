package im.kuo.core;

import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="im.kuo")
@EntityScan(basePackages="im.kuo.model")
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }


    @Bean
    public CommandLineRunner demo(UserRepository userRepository) {

        return (args) -> {
            userRepository.save(new User("kuo", "123456"));

            log.info("log found");

            for (User user : userRepository.findAll()) {
            }
        };
    }
}
