// TimerforSession.jsx

import { useState, useEffect } from "react"

function TimerforSession() {
  const sessionTime = new Date('2024-07-10T18:30:00+0900')
  const nowTime = new Date()

  const leftTime = sessionTime.getTime() - nowTime.getTime()

  const leftDay = Math.floor(leftTime / (1000 * 60 * 60 * 24))
  const leftHour = Math.floor(leftTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  const leftMinute = Math.floor(leftTime % (1000 * 60 * 60) / (1000 * 60))
  const leftSecond = Math.floor(leftTime % (1000 * 60) / 1000)

  const [day, setDay] = useState(leftDay)
  const [hour, setHour] = useState(leftHour)
  const [minute, setMinute] = useState(leftMinute)
  const [second, setSecond] = useState(leftSecond)

  console.log(leftTime)

  console.log(day, hour, minute, second)

  useEffect(() => {
    const Timer = setInterval(() => {
      if(parseInt(second) > 0) {
        setSecond(parseInt(second) - 1)
      }
      if (parseInt(second) === 0) {
        if (parseInt(minute) === 0) {
          if (parseInt(hour) === 0) {
            if (parseInt(day) === 0) {
              clearInterval(Timer)
            }
            else {
              setDay(parseInt(day) - 1)
              setHour(23)
              setMinute(59)
              setSecond(59)
            }
          }
          else {
            setHour(parseInt(hour) - 1)
            setMinute(59)
            setSecond(59)
          }
        }
        else {
          setMinute(parseInt(minute) - 1)
          setSecond(59)
        }
      }
    }, 1000)

    return () => {
      clearInterval(Timer)
    }
  }, [day, hour, minute, second])

  return (
    <>
      <p>다음 주 수요일 18시 30분까지 남은 시간</p>
      <p>{day}일 {hour}시간 {minute}분 {second}초</p>
    </>
  )

}

export default TimerforSession;