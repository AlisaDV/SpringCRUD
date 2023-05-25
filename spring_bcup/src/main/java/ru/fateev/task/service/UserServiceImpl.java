package ru.fateev.task.service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import ru.fateev.task.exception.UserNotFoundException;
import ru.fateev.task.model.Role;
import ru.fateev.task.model.User;
import ru.fateev.task.repository.RoleRepository;
import ru.fateev.task.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Data
public class UserServiceImpl implements UserService {
    @PersistenceContext
    private EntityManager em;
    private  UserRepository userRepository;
    private  RoleRepository roleRepository;
    private  BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return user;
    }

    public User findUserById(Long userId) {
        Optional<User> userFromDb = userRepository.findById(userId);
        return userFromDb.orElse(new User());
    }

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public boolean saveUser(User user) {
        User userFromDB = userRepository.findByUsername(user.getUsername());
        if (userFromDB != null) {
            return false;
        }

        user.setRoles(Collections.singleton(new Role(1L, "ROLE_USER")));
        user.setPassword(user.getPassword());
        userRepository.save(user);
        return true;
    }

    public boolean delete(Long userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User createUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(Collections.singleton(new Role(1L, "ROLE_USER")));
        user.setRole(user.getRoles().iterator().next().getName());
        userRepository.save(user);
        return user;
    }

    @Override
    public User updateUser(User user) {
        Optional<User> userFromDB = userRepository.findById(user.getId());
        /*if(bCryptPasswordEncoder.matches(user.getPassword(), userFromDB.getPassword())) {

        }*/
            if(!user.getPassword().equals(userFromDB.get().getPassword())) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        } else {
            user.setPassword(userFromDB.get().getPassword());
        }
            if(user.getId()!=110){
                user.setRoles(Collections.singleton(new Role(1L, "ROLE_USER")));
            } else {
                user.setRoles(Collections.singleton(new Role(2L, "ROLE_ADMIN")));
            }


        userRepository.save(user);
        return user;
    }

    public List<User> usergetList(Long idMin) {
        return em.createQuery("SELECT u FROM User u WHERE u.id > :paramId", User.class)
                .setParameter("paramId", idMin).getResultList();
    }

    public User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        return userRepository.findByUsername(auth.getName());
    }
}
