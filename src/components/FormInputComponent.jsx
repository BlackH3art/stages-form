import React from 'react';

import { motion } from 'framer-motion'

const FormInputComponent = ({ changeCallback, name, label, placeholder, error}) => {

  return ( 
    <>
      <div className="input-container">
        <motion.label layout htmlFor={name}>
          {label}
          {error.length === 1 ? <motion.p layout className="error">{error[0]}</motion.p> : null}
        </motion.label>
        <input className="form-input" name={name} type="text" placeholder={placeholder} onChange={changeCallback}/>
      </div>
    </>
   );
}
 
export default FormInputComponent;