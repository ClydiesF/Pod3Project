import React, {Component} from 'react'

class EditReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviewId:this.props.selectedReview.id,
            updatedRating:'',
            updatedComment:''
        }
    this.editReview = this.editReview.bind(this)
    this.handleCommentInput = this.handleCommentInput.bind(this)
    this.handleRatingInput = this.handleRatingInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    editReview (formPayload) {
        fetch(`/api/v1/reviews/update/${this.state.reviewId}`, {
        method: 'POST', 
        body: JSON.stringify(formPayload),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
        credentials:"same-origin"       
    })
    location.reload()
    }

    handleRatingInput(event) {
        this.setState({updatedRating:event.target.value})
    }

    handleCommentInput(event) {
        this.setState({updatedComment:event.target.value})
    }

    handleSubmit(_event) {
        let formPayload = this.props.selectedReview
        formPayload.rating = this.state.updatedRating
        formPayload.comment = this.state.updatedComment
        delete formPayload.reviewerPic
        delete formPayload.reviewerUsername
        delete formPayload.barReviewedId
        delete formPayload.barReviewedName
        delete formPayload.barReviewedLocation
        delete formPayload.barReviewedPic
        delete formPayload.reviewDate
        this.editReview(formPayload);    
    }

    render(){
        return(
        <div> 
            <a href="#" data-toggle="modal" data-target="#editModal"><i className="fa fa-edit"></i></a>

            <div className="container">
                <div className="modal fade" id="editModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h3 className="modal-title">Edit review</h3>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="rating">Rating</label><br></br>
                                    <select id="rating" name="rating" onChange={this.handleRatingInput}>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>
                                        <option value="7" >7</option>
                                        <option value="8" >8</option>
                                        <option value="9" >9</option>
                                        <option value="10" >10</option>
                                    </select> out of 10
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label htmlFor="comment">Comment</label><br></br>
                                        <textarea type="text" id="comment"  name="comment" onChange={this.handleCommentInput} rows="5" cols="60" maxLength="1000" className="form-control"/>
                                    </div>
                                    <br></br>
                                    <div>
                                        <input type="submit" value="Save Changes" className="btn btn-default"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default EditReview