/*
package ru.fateev.task.controller;

import org.springframework.web.bind.annotation.*;
import ru.fateev.task.model.User;
import ru.fateev.task.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import javax.validation.Valid;

@Controller
@RequestMapping("")
public class RegistrationController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/registration")
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "registration.html";
    }

    @PostMapping("/registration")
    public String addUser(@RequestBody User user, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            return "registration.html";
        }
        if (!user.getPassword().equals(user.getPasswordConfirm())){
            model.addAttribute("passwordError", "Пароли не совпадают");
            return "registration.html";
        }
        if (!userService.saveUser(user)) {
            model.addAttribute("usernameError", "Пользователь с таким именем уже существует");
            return "registration.html";
        }

        return "redirect:/";
    }
}
*/
