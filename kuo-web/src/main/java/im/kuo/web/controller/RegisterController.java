package im.kuo.web.controller;

import im.kuo.core.repository.UserRepository;
import im.kuo.model.user.User;
import im.kuo.web.form.RegisterForm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterForm registerForm) {
        userRepository.save(new User(registerForm.getPhone(), registerForm.getPassword()));
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
