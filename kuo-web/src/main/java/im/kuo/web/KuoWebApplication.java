package im.kuo.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "im.kuo")
@EntityScan(basePackages = "im.kuo.model")
public class KuoWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(KuoWebApplication.class, args);
    }
}
