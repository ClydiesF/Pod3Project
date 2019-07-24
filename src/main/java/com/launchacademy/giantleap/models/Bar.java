package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bars")
@Getter
@Setter
@NoArgsConstructor

public class Bar {
  @Id
  @SequenceGenerator(name="bar_generator", sequenceName="bars_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="bar_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="bar_name")
  private String barName;

  @Column
  private String description;

  @Column
  private String location;

  @Column(name="has_beach")
  private Boolean has_beach;

  @Column(name="bar_owner_id")
  private Integer BarOwnerId;

  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "bar")
  private List<Review> reviews = new ArrayList<Review>();
}