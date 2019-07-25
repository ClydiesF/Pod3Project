package com.launchacademy.giantleap.controllers;

import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserRestController {
  private UserRepository userRepo;

  @Autowired
  public UserRestController(UserRepository userRepo) {
    this.userRepo = userRepo;
  }

  @GetMapping("/api/v1/users")
  public Iterable<User> getAll() {
    return userRepo.findAll();
  }

  @GetMapping("/api/v1/users/{id}")
  public Optional<User> getOne(@PathVariable Integer id) {
    return userRepo.findById(id);
  }
}
