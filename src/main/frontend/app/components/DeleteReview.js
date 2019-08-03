import React, {Component} from 'react'

class DeleteReview extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    this.deleteReview = this.deleteReview.bind(this)
    }

    deleteReview () {
        let selectedReview = this.props.selectedReview
        fetch(`/api/v1/reviews/remove/${selectedReview.id}`, {
        method: 'POST', 
        body: JSON.stringify(selectedReview),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
        credentials:"same-origin"       
    })
    location.reload()
    }

    render(){
        return(
            <div style={{textAlign: `right`}}><a href="#" onClick={this.deleteReview} ><i className="fa fa-trash" ></i></a></div>
        )
    }
}
export default DeleteReview 