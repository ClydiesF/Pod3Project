import React, {Component} from "React"

const NumberField = props => {
  return(
    <label>{props.label}&nbsp;
      <input
        name={props.name}
        type='number'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default NumberField