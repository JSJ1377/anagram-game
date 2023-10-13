//import React from 'react';
import React, {Fragment} from 'react';

function SelectInput({label, id, values, 
                      currentValue, setCurrentValue}) {
  ///const values = props.values;
  const selectOptions = values.map((value)=>
  <option value={value[1]} key={value[0].toString()}>{value[1]}</option>
);
  return(
    <Fragment>
      <label htmlFor={id} className="col fw-bold">{label}</label>
      <select id={id}
        defaultValue={currentValue} 
        onChange={(e) => setCurrentValue(e.target.value)}>
        {selectOptions}
      </select><br />
    </Fragment>
  )
}

export default SelectInput