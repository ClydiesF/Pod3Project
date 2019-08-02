import React, { Component } from 'react';
import './BarShowContainer.scss';
import DeleteReview from '../components/DeleteReview';
import EditReview from '../components/EditReview'
import NavBar from '../components/NavBar';

class BarShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLoginUser: null,
      anonymous: true,
      bar: {},
      reviews: []
    }
  }

  componentDidMount() {
    let pathArray = window.location.pathname.split('/');
    let barId = pathArray[pathArray.length - 1];
    fetch(`/api/v1/bars/${barId}`)
    .then(response => {
      return response.json()
    })
    .then(bar => {
      this.setState( {bar: bar} )
      this.setState( {reviews: bar.reviews} )
    })

    fetch(`/api/v1/currentLoginUser`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No user is logged in ...');
      }
    })
    .then(currentLoginUser => {
      this.setState( {currentLoginUser: currentLoginUser} )
      this.setState( {anonymous: false} )
    })
  }

  render() {
    let sortedReviews = this.state.reviews
    sortedReviews.sort((a, b) => (a.reviewDate < b.reviewDate) ? 1 : -1)

    let reviewsArray = sortedReviews.map(review => {

      let millisec = Date.parse(review.reviewDate)
      let date = new Date(parseInt(millisec, 10));
      let dateFormat = date.toLocaleString();

      let displayOptions = false

      if(this.state.currentLoginUser !== null && this.state.currentLoginUser.username === review.reviewerUsername){
        displayOptions = true
      }

      return(
        <div className="container">
          <div className="row">
            <div className="col-md-2 text-center center">    
              <img src={review.reviewerPic} alt="avatar pic" height="60" width="60"/>
              <p>{review.reviewerUsername}</p>
            </div>
            <div className="col-md-10 pg-vertical-line">
              {displayOptions ? <DeleteReview selectedReview={review}/> : null }
              {displayOptions ? <EditReview selectedReview={review}/> : null } &emsp;&emsp;
              <div className="dateformat"><p><i>{dateFormat}</i></p></div>
              <p><strong>Rating: {review.rating} / 10</strong></p>
              <textarea className="form-control" rows="4" cols="85" maxLength="1000" style={{border: `none`, resize: `none`}} readOnly>{review.comment}</textarea>
            </div>
          </div>
          <hr></hr>
        </div>
      )
    })

    return (
      <div>
        <NavBar />
        <div className="container pg-border">
          <div className="row">

            <div className="col-md-4">
              <img src={this.state.bar.barPic} alt="Bar ambiance" height="240" width="280"/>
            </div>

            <div className="col-md-8 pg-vertical-line d-md-flex">
              <div className="text-primary">
                <h2>{this.state.bar.barName}</h2>
                <p><strong>Location</strong><br></br> {this.state.bar.location}</p>
                <p><strong>Description</strong><br></br> {this.state.bar.description}</p>
                <p><strong>Near the beach</strong><br></br> {this.state.bar.hasBeach ? "Yes" : "No"}</p>
              </div>
              <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">Write a review</button>
            </div>

          </div>
        </div>

        <hr style={{ borderTop: `2px solid maroon` }}></hr>
        <h2>Reviews</h2>
        <br></br>
        {reviewsArray}
      </div>
    )
  }
}
export default BarShowContainer;