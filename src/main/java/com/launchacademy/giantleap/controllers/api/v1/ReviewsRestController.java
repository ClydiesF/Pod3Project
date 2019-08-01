package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.Bar;
import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.BarRepository;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ReviewsRestController {
  private final BarRepository barRepo;
  private final UserRepository userRepo;
  private ReviewRepository reviewRepo;

  @Autowired
  public ReviewsRestController(BarRepository barRepo, UserRepository userRepo, ReviewRepository reviewRepo) {
    this.barRepo = barRepo;
    this.userRepo = userRepo;
    this.reviewRepo = reviewRepo;
  }

  @GetMapping("/api/v1/reviews")
  public Iterable<Review> getAll() {
    return reviewRepo.findAll();
  }

  @GetMapping("/api/v1/reviews/{id}")
  public Optional<Review> getOne(@PathVariable Integer id) {
    return reviewRepo.findById(id);
  }

  @NoArgsConstructor
  private class ReviewObjectNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class ReviewObjectNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReviewsRestController.ReviewObjectNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String reviewObjectNotFoundHandler(ReviewsRestController.ReviewObjectNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @PostMapping("/api/v1/reviews/remove/{id}")
  public void removeOne(@PathVariable Integer id) {
    Review review = reviewRepo.findById(id).orElseThrow(() -> new ReviewObjectNotFoundException());
    reviewRepo.delete(review);
  }

  @PostMapping("/api/v1/reviews/update/{reviewId}/{barId}")
  public Review updateReview(@RequestBody Review updatedReview, @PathVariable Integer reviewId, @PathVariable Integer barId, @AuthenticationPrincipal UserDetails currentUser) {

    Review review = reviewRepo.findById(reviewId).orElseThrow(() -> new ReviewObjectNotFoundException());
    review.setRating(updatedReview.getRating());
    review.setComment(updatedReview.getComment());

    User user = userRepo.findByUsername(currentUser.getUsername());
    review.setReviewer(user);

    Bar currentBar = barRepo.findById(barId).get();
    review.setBar(currentBar);

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();
    review.setReviewDate(now);

    List<Review> reviewListforUser = user.getReviews();
    reviewListforUser.add(review);
    user.setReviews(reviewListforUser);

    List<Review> reviewListforBar = currentBar.getReviews();
    reviewListforBar.add(review);
    currentBar.setReviews(reviewListforBar);

    reviewRepo.save(review);
    userRepo.save(user);
    barRepo.save(currentBar);

    return review;
  }
}