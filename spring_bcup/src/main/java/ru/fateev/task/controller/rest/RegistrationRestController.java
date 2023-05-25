package ru.fateev.task.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.fateev.task.model.User;
import ru.fateev.task.service.UserServiceImpl;

@RestController
@RequestMapping("/api/reg")
public class RegistrationRestController {
    @Autowired
    private UserServiceImpl userService;


    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
