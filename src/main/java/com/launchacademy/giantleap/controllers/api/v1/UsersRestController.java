package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import java.util.Optional;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UsersRestController {
  private UserRepository userRepo;

  @Autowired
  public UsersRestController(UserRepository userRepo) {
    this.userRepo = userRepo;
  }

  @GetMapping("/api/v1/users")
  public Iterable<User> getAll() {
    return userRepo.findAll();
  }


  @NoArgsConstructor
  private class UserObjectNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class UserObjectNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UsersRestController.UserObjectNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String barObjectNotFoundHandler(UsersRestController.UserObjectNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/api/v1/users/{id}")
  public Optional<User> getOne(@PathVariable Integer id) {
    return userRepo.findById(id);
  }

  @GetMapping("/api/v1/currentLoginUser")
  public User currentLoginUser(Model model, @AuthenticationPrincipal UserDetails currentUser) {
    User currentLoginUser= userRepo.findByUsername(currentUser.getUsername());
    return currentLoginUser;
  }
}
