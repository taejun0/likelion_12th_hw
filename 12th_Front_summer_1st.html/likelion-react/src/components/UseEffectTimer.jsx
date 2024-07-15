// UseEffectTimer.jsx

import { useState, useEffect } from "react";

function UseEffectTimer() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (run) {
      const timeout = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      if (time === 10) {
        setRun(false);
        setTime(0);

        clearTimeout(timeout);
      }

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [run, time]);
  
  const timer = () => {
    setRun(true);
  }

  return (
    <>
    <br />
    <br />
      {run ? (
        <>
          <p>Time: {time} seconds</p>
          <p>남은 시간 : {10-time}</p>
        </> 
      ) : (
        <button onClick={timer}>타이머시작</button>
      )
    }
    </>
  );
}

export default UseEffectTimer;