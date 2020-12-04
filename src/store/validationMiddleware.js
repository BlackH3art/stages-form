import validator from 'validator';

export let validationErrors = {
    name: [],
    surname: [],
    email: [],
    height: [],
    weight: [],
    phone: [],
    date: []
}


const validationMiddleware = ({ dispatch, getState}) => next => action => {
  
  let allErrors = [];

  Object.keys(validationErrors).forEach(field => {
    validationErrors[field].splice(0)
  })
  
  Object.keys(action.payload).forEach(field => {
    if(validator.isEmpty(action.payload[field])) {
      let errormsg = 'value is required!'
      validationErrors[field].push(errormsg);
      allErrors.push(errormsg)
    } 

  })
  
  if (allErrors.length === 0) {
    next(action)
  } else {
    allErrors.splice(0)
    return;
  }
  
}

export default validationMiddleware;
