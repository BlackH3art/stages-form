import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormStep from './FormStep.jsx';

import { updateFormData } from '../store/actionCreators';


const FormStepsControler = () => {

  const dispatch = useDispatch();

  const formStepInputs = useSelector(state => state.formShape.inputs);
  // const initialFormData = useSelector(state => state.formData);



  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  })

  const [lastStage, setLastStage] = useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateFormData(formData))

  }


  const formSteps = formStepInputs.map((item, index) => <FormStep 
    key={index}
    changeCallback={handleChange}
    inputs={item.names}
    labels={item.labels}
    placeholders={item.placeholders}
  />)

  const nextOrSendButton = lastStage ? 
    <button className="btn btn-primary" onClick={handleClick}>wyślij</button>
    : <button className="btn btn-outline-primary">dalej</button>

  return ( 
    <>
      <div className="form-steps-controler">
        {formSteps}
      </div>
      <div className="button-container">
        <button className="btn btn-outline-warning">cofnij</button>
        {nextOrSendButton}
      </div>
    </>
   );
}
 
export default FormStepsControler;