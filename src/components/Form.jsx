import React, { useState } from 'react';

import { Provider } from 'react-redux';
import formStore from '../store';

import FormHeader from './FormHeader.jsx';
import FormStepsControler from './FormStepsControler.jsx';

import '../style/styles.css'


const Form = () => {

  const [lastStage, setLastStage] = useState(false)
  const [stepState, setStepState] = useState({
    first: true,
    second: false,
    third: false
  })

  const handleNextClick = (e) => {
    e.preventDefault();

    if(stepState.first) {
      return setStepState({
        first: false,
        second: true,
        third: false
      })
    } else if (stepState.second) {
      setLastStage(true)
      return setStepState({
        first: false,
        second: false,
        third: true
      })
    } 
  }

  const handleGoBackClick = (e) => {
    e.preventDefault();

    setLastStage(false)

    if(stepState.second) {
      return setStepState({
        first: true,
        second: false,
        third: false
      })
    } else if (stepState.third) {
      return setStepState({
        first: false,
        second: true,
        third: false
      })
    } 
  }

  return ( 
    <>
      <Provider store={formStore}>
        <div className="App-header">

          <div className="form-container">
            <form>
              <FormHeader />
              <FormStepsControler goBackCallback={handleGoBackClick} goNextCallback={handleNextClick} stepState={stepState} lastStage={lastStage} />
            </form>
          </div>
          
        </div>

      </Provider>

    </>
   );
}
 
export default Form;

