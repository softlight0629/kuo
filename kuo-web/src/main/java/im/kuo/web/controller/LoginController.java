package im.kuo.web.controller;

import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import im.kuo.web.model.Registration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public String register(Registration registration) {

        userRepository.save(new User(registration.getPhone(), registration.getPassword()));

        System.out.println(userRepository.findAll());
        return "ok";
    }

    public String login() {
        return "";
    }
}
