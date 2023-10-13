import React, {Fragment} from 'react';

function AnagramSelectInput({ label, id, values, 
  currentValue, setCurrentValue }) {
const selectOptions = values.map((value)=>
<option value={value} key={value.toString()}>{value}</option>
);

return(
  
<Fragment>
<div>
  <h1>Select Word Length</h1>
  <label htmlFor={id} className="col font-weight-bold">{label}</label>
    <select id={id}
        defaultValue = {currentValue} 
        onChange = {(e) => setCurrentValue(e.target.value)}
        className="col form-control">
        {selectOptions}
    </select>
  </div>
</Fragment>

  )
}

export default AnagramSelectInput