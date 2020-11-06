import React from 'react';
import { useSelector } from 'react-redux';

import FormHeaderElement from './FormHeaderElement.jsx';

const FormHeader = () => {

  const stepsNames = useSelector(state => state.formShape.stepsNames)


  const formHeaderElements = stepsNames.map((step, index) => <FormHeaderElement
  key={index}
  title={step}
/>)

  return ( 
    <>
      <div className="header-container">
        <div className="form-header">
          {formHeaderElements}
        </div>
      </div>
    </>
   );
}
 
export default FormHeader;