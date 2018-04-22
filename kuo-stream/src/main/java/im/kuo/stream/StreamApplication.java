package im.kuo.stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.cloud.stream.messaging.Processor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.inject.Inject;

/**
 * @author xuebin.gxb
 * @version StreamApplication, v0.1 18/3/19 下午3:35 xuebin.gxb Exp $
 */
@SpringBootApplication
@EnableBinding(Processor.class)
@Controller
public class StreamApplication {

    @Autowired
    private Processor processor;

    @RequestMapping("/{name}")
    public ResponseEntity sayHello(@PathVariable String name) {
        processor.output().send(MessageBuilder.withPayload(name).build());

        return ResponseEntity.ok().build();
    }

    @StreamListener(Processor.INPUT)
    public void route(Object payload) {
        System.out.println("Received:"  + payload);
    }

    public static void main(String[] args) {
        SpringApplication.run(StreamApplication.class);
    }

    @Bean
    public MessageConverter providesTextPlainMessageConverter() {
        return new TextPlainMessageConverter();
    }

}