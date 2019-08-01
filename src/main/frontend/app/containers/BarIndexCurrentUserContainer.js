import React, {Component} from 'react';

class BarIndexCurrentUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser:{},
        bars:[],
        reviews: []
    }
  }

    componentDidMount() {
        fetch('/api/v1/currentLoginUser')
        .then(response => {
            return response.json()
        })
        .then(currentUser => {
            this.setState( {currentUser: currentUser} )
            this.setState( {reviews: currentUser.reviews} )
        })
    }

    render() {
        let modifiedReviews = this.state.reviews;
        const unique = modifiedReviews.map(e => e["barReviewedName"])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => modifiedReviews[e]).map(e => modifiedReviews[e]);

        let barsArray = unique.map(review => {
            return(
              <div className="container">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <img src={review.barReviewedPic} alt="Bar pic" height="60" width="60"/>
                  </div>
                  <div className="col-md-10 pg-vertical-line">
                    <p><a href={'/bars/'+review.barReviewedId}>{review.barReviewedName}</a></p>
                    <p>{review.barReviewedLocation}</p>
                  </div>
                </div>
                <hr></hr>
              </div>
            )
          })
    
        return(
            <div>
                <h3 className="text-center">Bars I've reviewed</h3>
                <div>{barsArray}</div>              
            </div>
        )
    }
}
export default BarIndexCurrentUserContainer