import React from 'react';

const ReviewTile = (props) => {
  let barImage = "https://i.ytimg.com/vi/LObpA84ddL0/hqdefault.jpg"

  return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-2 text-center">
                    <img src={barImage} alt="Bar pic" height="75" width="150"/>
                </div>
                <div className="col-md-10 pg-vertical-line">
                    <p>Rating: {props.rating} out of 10</p>
                    <p>Comment: {props.comment}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}
export default ReviewTile;
