package im.kuo.site;

import im.kuo.core.repository.SiteRepository;
import im.kuo.core.repository.UserRepository;
import im.kuo.core.tools.GuidGenerator;
import im.kuo.model.site.Site;
import im.kuo.model.site.resource.PageResource;
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
public class SiteManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(SiteManagerApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(SiteRepository siteRepository) {

        return (args) -> {
            Site site = new Site();
            site.setGuid(GuidGenerator.generate());
            site.setName("demo");
            site.setDomain("demo.kuo.im");
            site.setOwner("nicolas");
            site.setPlan("vip");
            site.setStatus("activate");

            site = siteRepository.save(site);

            PageResource pageResource = new PageResource();
            pageResource.setName("HOME");
            pageResource.setSite(site);
            pageResource.setTemplate("Home Page");

            site.addPageResource(pageResource);
            siteRepository.save(site);
        };
    }
}
