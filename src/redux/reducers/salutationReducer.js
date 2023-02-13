
import constantList from './../constants/constant-types';

const initialState = 
    { 
        hello : "Bonsoir tout le monde !"
    };


function salutationReducer(state = initialState, action) {


    switch (action.type) {
        
        case constantList.SAY_HELLO : {
            return { 
                hello : "bienvenue à gomycode"
            }
        }


        default: return state;
    }



}

export default salutationReducer;