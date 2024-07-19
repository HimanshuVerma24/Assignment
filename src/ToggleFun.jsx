import React, { useState } from 'react'
import FunCompOne from './FunCompOne';
import FunCompTwo from './FunCompTwo';
import './App.css';

  const ToggleFunc=()=>{

    const [funOne, setfunOne] = useState(false);
    const [funTwo, setfunTwo] = useState(false);

    const handlefunOne =() =>{
      setfunOne(!funOne);
    }

    const handlefunTwo =() =>{
      setfunTwo(!funTwo);
    }

  return (
    <div>
    <header>Styling Using Functional And Class Component</header><br /><br /><br />
      <box>
    <button onClick={handlefunOne}>First Functional Components</button>

    <button onClick={handlefunTwo}>Second Functional Components</button>
    </box>
    <div className="align">
    <div className="container1">
    {funOne ? <FunCompOne /> : null}
    </div>
    <div className="container2">
    {funTwo ? <FunCompTwo /> : null}
    </div>
    </div>

 </div>

  )
}

export default ToggleFunc
