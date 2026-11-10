package com.inventory.backend.controller;


import com.inventory.backend.entity.User;
import com.inventory.backend.service.UserService;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {


    private final UserService userService;


    public AuthController(UserService userService){

        this.userService = userService;

    }



    @PostMapping("/login")
    public User login(
            @RequestBody User user
    ){

        return userService.login(
                user.getEmail(),
                user.getPassword()
        );

    }


}