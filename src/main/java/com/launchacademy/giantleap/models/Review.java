package com.launchacademy.giantleap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.time.LocalDateTime;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
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

  @Min(value=1)
  @Max(value=10)
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

  @Column(name="review_date")
  private LocalDateTime reviewDate;

  public String getReviewerPic(){
    return reviewer.getUserPic();
  }

  public String getReviewerUsername(){
    return reviewer.getUsername();
  }

  public Integer getBarReviewedId(){
    return bar.getId();
  }

  public String getBarReviewedName(){
    return bar.getBarName();
  }

  public String getBarReviewedLocation(){
    return bar.getLocation();
  }
}