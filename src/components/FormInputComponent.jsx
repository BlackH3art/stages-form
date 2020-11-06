import React from 'react';

const FormInputComponent = ({ changeCallback, name, label, placeholder}) => {


  return ( 
    <>
      <div className="input-container">
        <label htmlFor={name}>
          {label}
        </label>
        <input className="form-input" name={name} type="text" placeholder={placeholder} onChange={changeCallback}/>
      </div>
    </>
   );
}
 
export default FormInputComponent;