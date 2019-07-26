package com.launchacademy.giantleap.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/bars")
public class BarsController {

  @GetMapping
  public String index() {
    return "bars/index";
  }

  @GetMapping("/{id}")
  public String show() {
    return "bars/show";
  }
}
