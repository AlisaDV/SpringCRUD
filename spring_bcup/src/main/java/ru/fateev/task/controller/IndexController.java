package ru.fateev.task.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping("/")
   // @PreAuthorize("hasAuthority('ROLE_USER')")
    public String index() {
        return "index.html";
    }
}