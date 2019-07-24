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
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="reviews")
@Getter
@Setter
@NoArgsConstructor

public class Review {
  @Id
  @SequenceGenerator(name="review_generator", sequenceName="reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="review_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column
  private Integer rating;

  @Column
  private String comment;

  @Column(name="like_count")
  private Integer likeCount;

  @Column(name="dislike_count")
  private Integer dislikeCount;

  @Column(name="reviewer_id")
  private Integer reviewerId;

  @Column(name="bar_id", nullable=false, insertable=false, updatable=false)
  private Integer barId;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name="bar_id", nullable=false)
  private Bar bar;
}
