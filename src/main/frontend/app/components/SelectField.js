import React from 'react';

const SelectField = props => {

  let beachOptions = props.options.map(option =>{
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return (
    <div>
      <label>Bar location status</label>
      <select value={props.selectedOption} onChange={props.handlerFunction}>
        {beachOptions}
      </select>
    </div>

  );
}

export default SelectField