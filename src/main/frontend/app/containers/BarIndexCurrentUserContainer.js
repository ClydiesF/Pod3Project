import React, {Component} from 'react';

class BarIndexCurrentUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser:{},
        bars:[],
        reviews: []
    }
    this.fetchBar = this.fetchBar.bind(this)
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

  fetchBar(barId) {
    fetch(`/api/v1/bars/${barId}`)
    .then(response => {
        return response.json()
    })
    .then(bar => {
        return bar
    })
  }

    render() {
        let barIds=[];
        this.state.reviews.map(review => {
            if(!barIds.includes(review.barReviewedId)){
                barIds.push(review.barReviewedId)
            }
        })

        barIds.map(id=>{
            this.fetchBar(id)
        })

        return(
            <div>
                <h3 className="text-center">Bars I've reviewed</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img src="" alt="Bar pic" height="40" width="40"/>
                        </div>
                        <div className="col-md-10 pg-vertical-line">
                            <p>Bar Name</p>
                            <p>Bar Location</p>
                        </div>
                    </div>
                    <hr></hr>
                </div>               
            </div>
        )
  }
}
export default BarIndexCurrentUserContainer