import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import FormStep from './FormStep.jsx';

import { updateFormData } from '../store/actionCreators';
import { validationErrors } from '../store/validationMiddleware';


const FormStepsControler = ({ goBackCallback, goNextCallback, stepState, lastStage }) => {

  const dispatch = useDispatch();
  const formStepInputs = useSelector(state => state.formShape.inputs);

  const [goBack, setGoBack] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  })

  const [firstStepData, setFirstStepData] = useState({
    name: '',
    surname: '',
    email: ''
  })
  const [secondStepData, setSecondStepData] = useState({
    height: '',
    weight: ''
  })
  const [thirdStepData, setThirdStepData] = useState({
    phone: '',
    date: ''
  })

  const [errorsObject] = useState(validationErrors)


  const { name, surname, email, height, weight, phone, date } = errorsObject;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (stepState.first) {
      setFirstStepData({
        ...firstStepData,
        [e.target.name]: e.target.value
      })
    } else if (stepState.second) {
      setSecondStepData({
        ...secondStepData,
        [e.target.name]: e.target.value
      })
    } else if (stepState.third) {
      setThirdStepData({
        ...thirdStepData,
        [e.target.name]: e.target.value
      })
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updateFormData(formData))

  }

  const handleGoBack = (e) => {
    setGoBack(true);
    goBackCallback(e);
  }


  const handleGoNext = (e) => {

    if (stepState.first) {
      dispatch(updateFormData(firstStepData))
    } else if (stepState.second) {
      dispatch(updateFormData(secondStepData))
    } else if (stepState.third) {
      dispatch(updateFormData(thirdStepData))
    }

    e.preventDefault();

    setGoBack(false);

    if (stepState.first) {
      if (name.length === 0 && surname.length === 0 && email.length === 0) {
        goNextCallback(e);
      }
    } else if (stepState.second) {
      if (height.length === 0 && weight.length === 0) {
        goNextCallback(e);
      }
    } else if (stepState.third) {
      if (phone.length === 0 && date.length === 0) {
        goNextCallback(e);
      } 
    } else {
      return
    }
    
  }

  const nextOrSendButton = lastStage 
    ? <button className="btn btn-primary" onClick={handleSubmit}>wyślij</button>
    : <button className="btn btn-outline-primary" onClick={handleGoNext}>dalej</button>



  const initialObj = {
    x: '100%',
  }
  const activeObj = {
    x: '0%',
  }
  const previousObj = {
    x: '-100%',
  }

  return ( 
    <>
      <div className="form-steps-controler">

        <AnimatePresence>

          {stepState.first && <motion.div className="animating-container" 
            key="first-step"
            initial={goBack ? previousObj : initialObj} 
            animate={activeObj}
            exit={previousObj}
            >

            <FormStep 
              changeCallback={handleChange}
              inputs={formStepInputs[0].names}
              labels={formStepInputs[0].labels}
              placeholders={formStepInputs[0].placeholders}
              errors={errorsObject}
            />

          </motion.div>}

          {stepState.second && <motion.div className="animating-container" 
            key="second-step"
            initial={goBack ? previousObj : initialObj}
            animate={activeObj}
            exit={goBack ? initialObj : previousObj}            
          >
            <FormStep 
              changeCallback={handleChange}
              inputs={formStepInputs[1].names}
              labels={formStepInputs[1].labels}
              placeholders={formStepInputs[1].placeholders}
              errors={errorsObject}
            />
          </motion.div>}

          {stepState.third && <motion.div className="animating-container" 
            key="third-step"
            initial={initialObj}
            animate={activeObj}
            exit={initialObj}
            >

            <FormStep 
              changeCallback={handleChange}
              inputs={formStepInputs[2].names}
              labels={formStepInputs[2].labels}
              placeholders={formStepInputs[2].placeholders}
              errors={errorsObject}
            />
          </motion.div>}

        </AnimatePresence>

      </div>
      <div className="button-container">
        <button className="btn btn-outline-warning" onClick={handleGoBack} disabled={stepState.first ? true : false}>cofnij</button>
        {nextOrSendButton}

      </div>
    </>
   );
}
 
export default FormStepsControler;