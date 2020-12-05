import React from 'react';

import FormInputComponent from './FormInputComponent.jsx';

const FormStep = ({ changeCallback, inputs, labels, placeholders, errors}) => {


  const inputComponents = inputs.map((item, index) => {
  

  return (<FormInputComponent 
    key={index}
    changeCallback={changeCallback}
    name={item}
    label={labels[index]}
    placeholder={placeholders[index]}
    error={errors[item]}
  />) })

  return ( 
    <>
      <div className="form-step-container">
        {inputComponents}
      </div>
    </>
   );
}
 
export default FormStep;