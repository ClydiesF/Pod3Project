package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@Entity
@Table(name = "bars")
public class Bar {
  @Id
  @SequenceGenerator(name="bar_generator", sequenceName="bars_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="bar_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @NotBlank
  @Column(name="bar_name", nullable=false)
  private String barName;

  @NotBlank
  @Column(name="description", nullable=false)
  private String description;

  @NotBlank
  @Column(name="location", nullable=false)
  private String location;

  @Column(name="has_beach")
  private Boolean hasBeach;

  @Column(name="bar_pic")
  private String barPic;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name="bar_owner_id", nullable=false)
  private User barOwner;

  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "bar")
  private List<Review> reviews = new ArrayList<Review>();
}