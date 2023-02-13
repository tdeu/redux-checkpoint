import { combineReducers } from "redux";
import salutationReducer from './salutationReducer';



const rootReducer = combineReducers({
    salutation : salutationReducer,

    
})


export default rootReducer;