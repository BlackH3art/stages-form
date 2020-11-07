import React from 'react';
import { useSelector } from 'react-redux';

import FormHeaderElement from './FormHeaderElement.jsx';

const FormHeader = ({ stepState }) => {

  const stepsNames = useSelector(state => state.formShape.stepsNames)


  return ( 
    <>
      <div className="header-container">
        <div className="form-header">
          <FormHeaderElement title={stepsNames[0]} isActive={stepState.first}/>
          <FormHeaderElement title={stepsNames[1]} isActive={stepState.second}/>
          <FormHeaderElement title={stepsNames[2]} isActive={stepState.third}/>
        </div>
      </div>
    </>
   );
}
 
export default FormHeader;