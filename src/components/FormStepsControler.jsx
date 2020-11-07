import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import FormStep from './FormStep.jsx';

import { updateFormData } from '../store/actionCreators';


const FormStepsControler = ({ goBackCallback, goNextCallback, stepState, lastStage }) => {

  const dispatch = useDispatch();
  const formStepInputs = useSelector(state => state.formShape.inputs);


  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  })

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

  const nextOrSendButton = lastStage 
    ? <button className="btn btn-primary" onClick={handleClick}>wyślij</button>
    : <button className="btn btn-outline-primary" onClick={goNextCallback}>dalej</button>


    
  const initialObj = {
    x: '100%'
  }
  const activeObj = {
    x: '0%'
  }
  const previousObj = {
    x: '-100%'
  }

  return ( 
    <>
      <div className="form-steps-controler">

        <motion.div className="animating-container" 
          initial={activeObj} 
          animate={stepState.first ? activeObj : previousObj}>

          <FormStep 
            changeCallback={handleChange}
            inputs={formStepInputs[0].names}
            labels={formStepInputs[0].labels}
            placeholders={formStepInputs[0].placeholders}
          />

        </motion.div>

        <motion.div className="animating-container" 
          initial={stepState.first ? initialObj : activeObj}
          animate={stepState.second ? activeObj : initialObj}>

          <FormStep 
            changeCallback={handleChange}
            inputs={formStepInputs[1].names}
            labels={formStepInputs[1].labels}
            placeholders={formStepInputs[1].placeholders}
          />
        </motion.div>

        <motion.div className="animating-container" 
          initial={stepState.first ? initialObj : activeObj}
          animate={stepState.third ? activeObj : initialObj}>

          <FormStep 
            changeCallback={handleChange}
            inputs={formStepInputs[2].names}
            labels={formStepInputs[2].labels}
            placeholders={formStepInputs[2].placeholders}
          />
        </motion.div>

      </div>
      <div className="button-container">
        <button className="btn btn-outline-warning" onClick={goBackCallback} disabled={stepState.first ? true : false}>cofnij</button>
        {nextOrSendButton}

      </div>
    </>
   );
}
 
export default FormStepsControler;