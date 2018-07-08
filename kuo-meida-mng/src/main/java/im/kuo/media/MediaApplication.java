package im.kuo.media;

import im.kuo.core.repository.MediaResourceRepository;
import im.kuo.model.media.MediaResource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "im.kuo")
@EntityScan(basePackages = "im.kuo.model")
public class MediaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MediaApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(MediaResourceRepository mediaResourceRepository) {

        return (args) -> {

            String[] urls = new String[] {
                    "https://static.wixstatic.com/media/d67dcdfb27f141658547637bfc0fe5ff.jpg/v1/fill/w_440,h_440/d67dcdfb27f141658547637bfc0fe5ff.jpg",
                    "https://static.wixstatic.com/media/8a4d76ef8aae481c9d82696a1c2a8a1e.jpg/v1/fill/w_440,h_440/8a4d76ef8aae481c9d82696a1c2a8a1e.jpg",
                    "https://static.wixstatic.com/media/b2f7ef303bfa46ffa607186d757eb73f.jpg/v1/fill/w_440,h_440/b2f7ef303bfa46ffa607186d757eb73f.jpg",
                    "https://static.wixstatic.com/media/b88f2d5da73042e2b86399ab9f21367f.jpg/v1/fill/w_440,h_440/b88f2d5da73042e2b86399ab9f21367f.jpg",
                    "https://static.wixstatic.com/media/c028e3f9542a4bd88c8110c26beaa0da.jpg/v1/fill/w_440,h_440/c028e3f9542a4bd88c8110c26beaa0da.jpg",
                    "https://static.wixstatic.com/media/0c27d9aa1d464108a6b342d9deef3970.jpg/v1/fill/w_440,h_440/0c27d9aa1d464108a6b342d9deef3970.jpg",

                    "https://static.wixstatic.com/media/8168415addfc4b1aa33b7e8f82a30dbb.jpg/v1/fill/w_440,h_440/8168415addfc4b1aa33b7e8f82a30dbb.jpg",
                    "https://static.wixstatic.com/media/374c684f828be9145f967539d8701b27.jpg/v1/fill/w_440,h_440/374c684f828be9145f967539d8701b27.jpg",
                    "https://static.wixstatic.com/media/a38649d65bd949f1a23175c75483200f.jpg/v1/fill/w_440,h_440/a38649d65bd949f1a23175c75483200f.jpg",
                    "https://static.wixstatic.com/media/89acfdd1cd54491fa38c498ac0cc8043.jpg/v1/fill/w_440,h_440/89acfdd1cd54491fa38c498ac0cc8043.jpg",
                    "https://static.wixstatic.com/media/94529b508b40459fb23e9c35b7e7cc0c.jpg/v1/fill/w_440,h_440/94529b508b40459fb23e9c35b7e7cc0c.jpg",
                    "https://static.wixstatic.com/media/580b4896ab1d4efb846d84f9f9e670fe.jpg/v1/fill/w_440,h_440/580b4896ab1d4efb846d84f9f9e670fe.jpg",
                    "https://static.wixstatic.com/media/9cc22d8b8d5244aba9ed73fb1783fc26.jpg/v1/fill/w_440,h_440/9cc22d8b8d5244aba9ed73fb1783fc26.jpg",
                    "https://static.wixstatic.com/media/281ecf92b26b49c99ae687ec6e131cfc.jpg/v1/fill/w_440,h_440/281ecf92b26b49c99ae687ec6e131cfc.jpg",
                    "https://static.wixstatic.com/media/b1d0014f7b604fa8acdbb32e9f9f11a4.jpg/v1/fill/w_440,h_440/b1d0014f7b604fa8acdbb32e9f9f11a4.jpg"
            };

            for (int i = 0; i < urls.length; i++) {
                MediaResource mediaResource = new MediaResource("test" + i , urls[i]);
                mediaResourceRepository.save(mediaResource);
            }
        };
    }
}
