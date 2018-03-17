package im.kuo.resource.controller;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("/api/data")
    public TestData test() {
        return new TestData("123", "456");
    }


    @Data
    public static class TestData {
        private String name;

        private String pwd;

        public TestData(String name, String pwd) {
            this.name = name;
            this.pwd = pwd;
        }
    }
}
