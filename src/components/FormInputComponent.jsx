import React from 'react';

const FormInputComponent = ({ changeCallback, name, label, placeholder, errors}) => {


  return ( 
    <>
      <div className="input-container">
        <label htmlFor={name}>
          {label}
          <p className="error">{errors}</p>
        </label>
        <input className="form-input" name={name} type="text" placeholder={placeholder} onChange={changeCallback}/>
      </div>
    </>
   );
}
 
export default FormInputComponent;