import { createStore, applyMiddleware, compose } from "redux";
import formReducer from './formReducer';
import validationMiddleware from './validationMiddleware';

export default createStore(formReducer, compose(
  applyMiddleware(validationMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

