package com.launchacademy.giantleap.controllers;

import com.launchacademy.giantleap.models.Bar;
import com.launchacademy.giantleap.repositories.BarRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class BarsRestController {
  private final BarRepository barRepo;

  @Autowired
  private BarsRestController(BarRepository barRepo) {
    this.barRepo = barRepo;
  }

  @GetMapping("/api/v1/bars")
  public Iterable<Bar> getAll() {
  return barRepo.findAll();
  }

  @GetMapping("/api/v1/bars/{id}")
  public Optional<Bar> getOne(@PathVariable Integer id) {
    return barRepo.findById(id);
  }

}