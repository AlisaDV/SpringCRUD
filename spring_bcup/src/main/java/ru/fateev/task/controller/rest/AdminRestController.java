package ru.fateev.task.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.fateev.task.model.Role;
import ru.fateev.task.model.User;
import ru.fateev.task.service.UserServiceImpl;

@RestController
@RequestMapping("/api/admin")
public class AdminRestController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping
    public boolean checkPermission() {


        if(userService.getCurrentUser().getRoles().iterator().next().getName().equals("ROLE_ADMIN")) {
            return true;
        } else {
            return false;
        }

    }



}
