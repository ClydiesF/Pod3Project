package com.launchacademy.giantleap.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/reviews")
public class ReviewsController {

  @GetMapping
  public String index() {
    return "reviews/index";
  }
}
