import React, {Component} from "react"

const InputField = props => {
  return(
    <label>{props.label}
      <input
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.content}
      />
    </label>
  )
}

export default InputField
