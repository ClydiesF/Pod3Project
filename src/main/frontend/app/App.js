import React, {Component} from 'react';
import ReviewFormContainer from './containers/ReviewFormContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }

    this.addNewReview = this.addNewReview.bind(this)
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

  addNewReview(formPayload) {
    fetch("/api/v1/reviews", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: "same-origin",
      body: JSON.stringify(formPayload)
    })
      .then(response => response.json())
      .then(body => {
        this.setState( {reviews: [...this.state.reviews, body]} )
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`))
  }

  render(){
    let reviewsArray = this.state.reviews.map(review => {
      return (
        <div>
          <li>
            {review.barId}: {review.rating} - {review.comment} (Reviewer: {review.reviewerId})
          </li>
        </div>
      )
    })

    return(
      <div>
        <div>
          <h1>Bar Reviews</h1>
          <ul>{reviewsArray}</ul>
        </div>
        <div>
          <ReviewFormContainer addNewReview={this.addNewReview} />
        </div>
      </div>
    )
  }
}

export default App
