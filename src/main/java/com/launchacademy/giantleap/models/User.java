package com.launchacademy.giantleap.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
  @Id
  @SequenceGenerator(name = "user_generator", sequenceName = "users_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name="username", unique = true)
  private String username;

  @Column(name="password")
  private String password;

  @Column(name="is_bar_owner")
  private Boolean isBarOwner;

  @Column(name="user_pic")
  private String userPic;

  @JsonBackReference
  @ManyToMany
  @JoinTable(
      name="users_roles",
      joinColumns=@JoinColumn(name="user_id", referencedColumnName="id"),
      inverseJoinColumns=@JoinColumn(name="role_id", referencedColumnName="id")
  )
  private Set<Role> roles;

  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "reviewer")
  private List<Review> reviews = new ArrayList<Review>();

  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "barOwner")
  private List<Bar> bars = new ArrayList<Bar>();
}