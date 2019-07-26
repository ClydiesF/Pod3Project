import React, {Component} from 'react';

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
      this.setState( {reviews: reviews} )
    })
  }

  render() {
    let reviewsArray = this.state.reviews.map(review => {
      return(
        <div>
          <li>
            {review.barId}: {review.rating} - {review.comment} (Reviewer: {review.reviewerId})
          </li>
        </div>
      )
    })

    return(
      <div>
        <h1>List of Reviews</h1>
        <ul>{reviewsArray}</ul>
      </div>
    )
  }
}
export default ReviewIndexContainer
