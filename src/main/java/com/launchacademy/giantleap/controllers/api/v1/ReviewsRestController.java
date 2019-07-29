package com.launchacademy.giantleap.controllers.api.v1;

import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ReviewsRestController {
  private ReviewRepository reviewRepo;

  @Autowired
  public ReviewsRestController(ReviewRepository reviewRepo) {
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
}