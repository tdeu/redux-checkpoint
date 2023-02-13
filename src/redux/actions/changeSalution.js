
import constantList from './../constants/constant-types';

const  changeSalution = () => {


    return { 
        type : constantList.SAY_HELLO,
        payload : "",
    };
}



export default changeSalution;