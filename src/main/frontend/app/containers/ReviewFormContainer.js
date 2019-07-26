import React, {Component} from 'react'
import InputField from '../components/ReviewInputField'

class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: '',
      comment: ''
    }

    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormClear = this.handleFormClear.bind(this)
  }

handleRatingChange(event) {
  this.setState( { rating: event.target.value} )
}

handleCommentChange(event) {
  this.setState( { comment: event.target.value} )
}

handleFormClear(event) {
  this.setState( {
    rating: '',
    comment: ''
  } )
}

handleSubmit(event) {
  event.preventDefault()
  let hasErrors = false
  if(this.state.comment.trim() === "") {
    alert("Please enter a comment.")
    hasErrors = true
  }

  if(!hasErrors) {
    this.props.addNewReview({
      rating: this.state.rating,
      comment: this.state.comment
    })
    this.handleFormClear()
  }
}

  render(){
    return(
      <div>
      <h1>Add a review:</h1>
      <form onSubmit={this.handleSubmit}>
        <InputField
          content={this.state.rating}
          label="Rating"
          name="rating"
          type="number"
          onChange={this.handleRatingChange}
        />
        <InputField
          content={this.state.comment}
          label="Comment"
          name="comment"
          type="text"
          onChange={this.handleCommentChange}
        />
        <div className="button-group">
          <button className="button" type="reset" onClick={this.handleFormClear}>Clear Details</button>
          <button className="button" type="submit">Submit Review</button>
        </div>
      </form>
      </div>
    )
  }
}

export default ReviewFormContainer
