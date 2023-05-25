package ru.fateev.task.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import ru.fateev.task.model.User;

import java.util.List;

@Service
public interface UserService extends UserDetailsService {

    User findUserById(Long userId);
    List<User> allUsers();
    boolean saveUser(User user);
    boolean delete(Long id);
    void deleteUser(Long id);
    User createUser(User user);
    User updateUser(User user);
}
