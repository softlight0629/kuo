package im.kuo.resource.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("/api/resource")
    public String test() {
        return "I'm resource";
    }
}
