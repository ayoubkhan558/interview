import React, { useState, useEffect } from "react"

import './Clock.css'
import DialImg from "/dial.png"
import HoursImg from "/hours.png"
import MinuetsImg from "/minuets.png"
import SecImg from "/sec.png"

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000);
  }, [])

  const hours = time.getHours()
  const minuets = time.getMinutes()
  const seconds = time.getSeconds()
  const hoursDeg = (hours % 12) * 30 + minuets + 0.5
  const minuetsDeg = minuets * 6
  const secondsDeg = seconds * 6
  // console.log(hours, minuets)

  return (
    <div className="clock">
      <div className="dot"></div>
      {/* <div>
        {hours}
        {minuets}
        {seconds}
      </div> */}
      <div className="inner"></div>
      <img className="dial" src={DialImg} alt="" />
      <img className="hours" src={HoursImg} alt="" style={{ transform: `rotate(${hoursDeg}deg)` }} />
      <img className="minuets" src={MinuetsImg} alt="" style={{ transform: `rotate(${minuetsDeg}deg)` }} />
      <img className="seconds" src={SecImg} alt="" style={{ transform: `rotate(${secondsDeg}deg)` }} />
    </div>
  )
}

export default Clock;
