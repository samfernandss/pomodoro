import React, { useEffect } from 'react';

const Timer = ({ timer, setTimer }) => {

  useEffect(() => {
    if (timer < 0) return;

    setTimer(timer);

    const pomodoroTimer = setTimeout(() => {
      console.log(timer)
      setTimer(timer - 1);
      if (timer = 0) {
        clearInterval(pomodoroTimer);
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      {timer >= 0 && <div>Timer: {timer}</div>}
      {timer < 0 && <p>intervalo</p>}
    </>
  )
};

export default Timer;