import {useState} from 'react';

function UseMode(){
    const [Modedark, setMode] = useState(true);
    const toggleMode = () =>{
      setMode(!Modedark);
      console.log(Modedark);
    }
    return {Modedark, toggleMode}
  }

export default UseMode;