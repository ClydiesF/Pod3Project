import React from 'react';

const BarTile = (props) => {
  return(
    <div className="bar-tile">
      <a href={`/bars/${props.id}`}>{props.name}</a>
      <p>{props.name} in {props.location}</p>
      <hr/>
    </div>
  )
}

export default BarTile;
