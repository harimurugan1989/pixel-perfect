import React from 'react';
import style from './Timer.module.css';
import { useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = '12 Jun 2023 18:30:00 GMT';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    if (time <= 0) {
      setDays(0);
      setSeconds(0);
      setHours(0);
      setMinutes(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.timer} role="timer">
      <div className={style.col4}>
        <div className={style.box}>
          <p id="day">{days < 10 ? '0' + days : days}</p>
          <span className={style.text}>Days</span>
        </div>
      </div>
      <div className={style.col4}>
        <div className={style.box}>
          <p id="hour">{hours < 10 ? '0' + hours : hours}</p>
          <span className={style.text}>Hours</span>
        </div>
      </div>
      <div className={style.col4}>
        <div className={style.box}>
          <p id="minute">{minutes < 10 ? '0' + minutes : minutes}</p>
          <span className={style.text}>Minutes</span>
        </div>
      </div>
      <div className={style.lastcol}>
        <div className={style.box}>
          <p id="second">{seconds < 10 ? '0' + seconds : seconds}</p>
          <span className={style.text}>Seconds</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
