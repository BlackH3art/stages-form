import React, { useEffect, useState } from 'react';
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

  const { name, surname, email, height, weight, phone, date } = validationErrors;

  const [ firstStepErrors, setFirstStepErrors ] = useState([])
  const [ secondStepErrors, setSecondStepErrors ] = useState([])
  const [ thirdStepErrors, setThirdStepErrors ] = useState([])


  useEffect(() => {
    setFirstStepErrors([name, surname, email]);
    setSecondStepErrors([height, weight]);
    setThirdStepErrors([phone, date]);
  }, [name, surname, email, height, weight, phone, date])


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateFormData(formData))

  }

  const handleGoBack = (e) => {
    setGoBack(true);
    goBackCallback(e);
  }

// console.log(firstStepErrors[0].length);

  const handleGoNext = (e) => {
    dispatch(updateFormData(formData))

    e.preventDefault();
    setGoBack(false);
    if (stepState.first) {
      console.log(firstStepErrors);
      if (firstStepErrors[0].length === 0 && firstStepErrors[1].length === 0 && firstStepErrors[2].length === 0) {
        console.log('first step go next');
        goNextCallback(e);
      }
    } else if (stepState.second) {
      console.log(secondStepErrors);
      if (secondStepErrors[3].length === 0 && secondStepErrors[4].length === 0) {
        console.log('secend step go next');
        goNextCallback(e);
      }
    } else if (stepState.third) {
      if (thirdStepErrors[5].length === 0 && thirdStepErrors[6].length === 0) {
        console.log('third step go next');
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
              errors={firstStepErrors}
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
              errors={secondStepErrors}
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
              errors={thirdStepErrors}
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