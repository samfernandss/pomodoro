import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(props.timer);

    if (timer !== 0) {
      const pomodoroTimer = setTimeout(() => {
        console.log(timer)
        setTimer(timer - 1);
      }, 1000);
      if (timer < 0) {
        clearInterval(pomodoroTimer);
      }
    }
  }, [timer]);

  return (
    <div>Timer</div>
  )
};

export default Timer;