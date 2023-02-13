import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import changeSalution from './redux/actions/changeSalution';

const App = ()=>{



  const dispatch = useDispatch();
  // const  [salutation, setSalutation] = useState("Bienvenue à gomycode") //

  const salutation = useSelector(state => state.salutation.hello)

  const handleChangeSalutation = () => {

    dispatch(changeSalution());


      
  }

  return (


    <div>
      <h1>{salutation}</h1>

      <button onClick={handleChangeSalutation}>Change salutation</button>
    </div>







  );
}


export default App;