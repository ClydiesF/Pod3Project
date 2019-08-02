import React from 'react';

const BarTile = (props) => {
  let barImage = props.pic

  return(
    <div>
      <a href={`/bars/${props.id}`}>
        <div className="container box1">
            <div className="row">
                <div className="col-md-7 text-center center">
                  <p style={{fontSize: `30px`}}>{props.name}</p>
                  <p>{props.location}</p>
                </div>
                <div className="col-md-5 center1">
                  <img src={barImage} alt="Bar pic" height="180" width="100"/>
                </div>
            </div>
        </div>
        </a>
        <br></br>
        <br></br>
    </div>
  )
}
export default BarTile;
