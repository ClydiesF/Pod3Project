import React, {Component} from 'react';
import ReviewFormContainer from './ReviewFormContainer'

class BarShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: {},
      reviews: []
    }
  }

  componentDidMount() {
    // let selectedBarId = this.props.params.id
    let pathArray = window.location.pathname.split('/');
    let barId = pathArray[pathArray.length-1];
    fetch(`/api/v1/bars/${barId}`)
    .then(response => {
      return response.json()
  })
    .then(bar => {
      this.setState( {bar: bar} )
      this.setState( {reviews: bar.reviews} )
    })
  }

  render() {
    let reviewsArray = this.state.reviews.map(review => {
      return(
        <div>
          <li>
            {review.rating} - {review.comment}
          </li>
        </div>
      )
    })

    return(
      <div>
        <h1>Here are the deets on the {this.state.bar.barName}</h1>
        <h3>Location: {this.state.bar.location}</h3>
        <h3>Description: {this.state.bar.description}</h3>
        <h3>Near the beach: {this.state.bar.hasBeach}</h3>
        <h2>Customer Reviews</h2>
        <ul>{reviewsArray}</ul>
        <div>
          <ReviewFormContainer />
        </div>
      </div>
    )
  }
}

export default BarShowContainer;
