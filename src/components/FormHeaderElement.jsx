import React from 'react';

const FormHeaderElement = ({ title, isActive }) => {
  
  const styles = `form-header-element ${isActive ? 'active' : ''}`

  return ( 
    <>
      <div className={styles}>
        <h1> {title} </h1>
      </div>
    </>
  );
}
 
export default FormHeaderElement;