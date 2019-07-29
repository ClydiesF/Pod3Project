package com.launchacademy.giantleap.controllers;

import com.launchacademy.giantleap.models.Bar;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.BarRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
@RequestMapping
public class BarsController {

  private final BarRepository barRepo;
  private final UserRepository userRepo;
  private final ReviewRepository reviewRepo;

  @Autowired
  private BarsController(BarRepository barRepo, UserRepository userRepo, ReviewRepository reviewRepo) {
    this.barRepo = barRepo;
    this.userRepo = userRepo;
    this.reviewRepo = reviewRepo;
  }

  @GetMapping("/")
  public String showHomePage() {
    return "home/index";
  }

  @GetMapping("/bars")
  public String getAllBars() {
    return "bars/index";
  }

  @GetMapping("/bars/{barId}")
  public String getOneBar(@PathVariable Integer barId, Model model) {
    Review review = new Review();
    model.addAttribute("barId", barId);
    model.addAttribute("review", review);
    return "bars/show";
  }

  @GetMapping("/newBar")
  public String getNew(@ModelAttribute Bar bar, Model model) {
    model.addAttribute("bar", bar);
    return "bars/new";
  }

  @PostMapping("/newBar")
  public String createBar(@ModelAttribute Bar bar, @AuthenticationPrincipal UserDetails currentUser, Model model) {
    if(currentUser == null){
      return "redirect:/registration";
    }

    User user = userRepo.findByUsername(currentUser.getUsername());

    if(!user.getIsBarOwner()){
      model.addAttribute("error", true);
      return "bars/new";
    }else{
      bar.setBarOwner(user);
      barRepo.save(bar);
      return "redirect:/welcome";
    }

  }

  @PostMapping("/bars/{barId}")
  public String createReview(@PathVariable Integer barId, @ModelAttribute Review review, Model model, @AuthenticationPrincipal UserDetails currentUser) {

    if(currentUser == null){
      return "redirect:/login";
    }

    User user = userRepo.findByUsername(currentUser.getUsername());
    review.setReviewer(user);

    Bar currentBar = barRepo.findById(barId).get();
    review.setBar(currentBar);

    List<Review> reviewListforUser = user.getReviews();
    reviewListforUser.add(review);
    user.setReviews(reviewListforUser);

    List<Review> reviewListforBar = currentBar.getReviews();
    reviewListforBar.add(review);
    currentBar.setReviews(reviewListforBar);

    reviewRepo.save(review);
    userRepo.save(user);
    barRepo.save(currentBar);
    return "redirect:/bars/{barId}";
  }
}