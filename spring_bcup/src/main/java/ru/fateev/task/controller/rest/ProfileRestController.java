package ru.fateev.task.controller.rest;

import org.springframework.web.bind.annotation.*;
import ru.fateev.task.model.User;
import ru.fateev.task.service.UserServiceImpl;

@RestController
@RequestMapping("/api/profile")
public class ProfileRestController {
    private final UserServiceImpl userService;

    public ProfileRestController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public User getCurrentUser() {
        return userService.getCurrentUser();
    }


}
