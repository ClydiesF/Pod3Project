import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class ReviewIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/reviews')
      .then(response => {
        return response.json()
      })
      .then(reviews => {
        this.setState({ reviews: reviews })
      })
  }

  render() {
    let reviewsArray = this.state.reviews.map(review => {
      return (
        <li>
          {review.barId}: {review.rating} - {review.comment} (Reviewer: {review.reviewerId})
        </li>
      )
    })

    return (
      <div>
        <NavBar />
        <h1>List of Reviews</h1>
        <ul>{reviewsArray}</ul>
      </div>
    )
  }
}
export default ReviewIndexContainer
