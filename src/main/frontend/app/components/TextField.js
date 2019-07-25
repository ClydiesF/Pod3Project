import React, {Component} from "React"

const TextField = props => {
  return(
    <label>{props.label}&nbsp;
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default TextField