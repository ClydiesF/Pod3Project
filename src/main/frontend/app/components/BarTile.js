import React from 'react';

const BarTile = (props) => {
  let barImage = props.pic
  if(barImage == "") {
    barImage = "https://i.ytimg.com/vi/LObpA84ddL0/hqdefault.jpg"
  }

  return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-2 text-center">
                    <img src={barImage} alt="Bar pic" height="75" width="150"/>
                </div>
                <div className="col-md-10 pg-vertical-line">
                    <p>Name: <a href={`/bars/${props.id}`}>{props.name}</a></p>
                    <p>Location: {props.location}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}
export default BarTile;
