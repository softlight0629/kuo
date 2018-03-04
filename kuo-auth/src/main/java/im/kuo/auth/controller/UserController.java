package im.kuo.auth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @RequestMapping(value = "/api/user/me", method = RequestMethod.GET)
    public Principal user(Principal principal) {
        return principal;
    }
}
