package com.launchacademy.giantleap.controllers;

import com.launchacademy.giantleap.models.Review;
import com.launchacademy.giantleap.repositories.ReviewRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ReviewRestController {
  private ReviewRepository reviewRepo;

  @Autowired
  public ReviewRestController(ReviewRepository reviewRepo) {
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
