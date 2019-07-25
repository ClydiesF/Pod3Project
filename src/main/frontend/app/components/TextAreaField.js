import React, {Component} from "React"

const TextAreaField = props => {
  return(
    <label>{props.label}&nbsp;
      <textarea
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default TextAreaField