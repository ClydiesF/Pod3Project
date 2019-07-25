package com.launchacademy.giantleap.controllers;

import com.launchacademy.giantleap.models.Bar;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.BarRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping
public class BarController {

  private final BarRepository barRepo;
  private final UserRepository userRepo;

  @Autowired
  private BarController(BarRepository barRepo, UserRepository userRepo) {
    this.barRepo = barRepo;
    this.userRepo = userRepo;
  }

  @GetMapping("/newBar")
  public String getNew(@ModelAttribute Bar bar, Model model) {
    model.addAttribute("bar", bar);
    return "bars/new";
  }

  @PostMapping("/newBar")
  public String createBar(@ModelAttribute Bar bar, @AuthenticationPrincipal UserDetails currentUser, Model model) {
    User user = userRepo.findByUsername(currentUser.getUsername());
    bar.setBarOwner(user);
    barRepo.save(bar);
    return "redirect:/welcome";
  }

}
