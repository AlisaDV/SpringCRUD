package ru.fateev.task.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login.html");
        registry.addViewController("/api/users").setViewName("index.html");
        registry.addViewController("/profile").setViewName("profile.html");
        registry.addViewController("/registration").setViewName("registration.html");
        registry.addViewController("/").setViewName("index.html");
    }


}
