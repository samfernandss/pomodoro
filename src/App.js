import React, { useState } from 'react';
import './App.css';
import Timer from './Components/Timer';
import Input from './Components/Input';

function App() {
  const [timer, setTimer] = useState(0);

  return (
    <div>
      <Input
        type='number'
        label='How many minutes do you wanna focus?'
        id='timer'
        onChange={setTimer} />
      <Timer timer={timer} setTimer={setTimer}/>
    </div>
  );
}

export default App;
