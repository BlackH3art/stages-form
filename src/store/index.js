import { createStore } from "redux";
import formReducer from './formReducer';

export default createStore(formReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

