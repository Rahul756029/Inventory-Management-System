package com.inventory.backend.service;


import com.inventory.backend.entity.User;
import com.inventory.backend.repository.UserRepository;


import org.springframework.stereotype.Service;



@Service
public class UserService {


    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;

    }


    public User login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }
}