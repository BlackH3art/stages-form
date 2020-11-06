import React from 'react';

import { Provider } from 'react-redux';
import formStore from '../store';

import FormHeader from './FormHeader.jsx';
import FormStepsControler from './FormStepsControler.jsx';

import '../style/styles.css'


const Form = () => {

  return ( 
    <>
      <Provider store={formStore}>
        <div className="App-header">

          <div className="form-container">
            <form>
              <FormHeader />
              <FormStepsControler />
            </form>
          </div>
          
        </div>

      </Provider>

    </>
   );
}
 
export default Form;

