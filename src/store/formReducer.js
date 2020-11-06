import { SENDDATA } from './actionCreators';
import { formInitialData } from './formInitialData';

export default function formReducer(storeData, action) {

  switch(action.type) {

    case SENDDATA: 
      return {
        ...storeData,
        [storeData.formData]: action.payload
      };

    default:
      return storeData || formInitialData
  }

}