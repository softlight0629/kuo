package im.kuo.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "im.kuo")
@EntityScan(basePackages = "im.kuo.model")
public class KuoAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(KuoAuthApplication.class);
    }
}
