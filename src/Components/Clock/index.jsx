import React, { useState, useEffect } from "react";
import './Clock.css';
import DialImg from "/dial.png";
import Dial2Img from "/dial-2.png";
import HoursImg from "/hours.png";
import MinuetsImg from "/minuets.png";
import SecImg from "/sec.png";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() + 2;
  const minuets = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation degrees for each hand
  // const hoursDeg = 0;
  const hoursDeg = ((hours % 12) * 30 + minuets / 2) + 107;
  const minuetsDeg = (minuets * 6) + 180;
  const secondsDeg = seconds * 6;

  return (
    <div className="clock">
      <div className="dot"></div>
      <img className="hours" src={HoursImg} alt="Hours Hand" style={{ transform: `rotate(${hoursDeg}deg)` }} />
      <img className="minuets" src={MinuetsImg} alt="Minutes Hand" style={{ transform: `rotate(${minuetsDeg}deg)` }} />
      <img className="seconds" src={SecImg} alt="Seconds Hand" style={{ transform: `rotate(${secondsDeg}deg)` }} />
      <img className="dial" src={DialImg} alt="Dial" />
      <img className="dial" src={Dial2Img} alt="Dial" />
    </div>
  );
}

export default Clock;
