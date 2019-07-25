package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Review {
  @Id
  @SequenceGenerator(name="review_generator", sequenceName="reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="review_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="rating", nullable=false)
  private Integer rating;

  @Column(name="comment")
  private String comment;

  @Column(name="like_count")
  private Integer likeCount;

  @Column(name="dislike_count")
  private Integer dislikeCount;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name ="bar_id")
  private Bar bar;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name ="reviewer_id")
  private User reviewer;
}