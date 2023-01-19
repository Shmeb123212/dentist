import React, { useState } from 'react'
import cl from './MyTimeSelect.module.css'
import { useSelector } from 'react-redux'

export default function MyTimeSelect({activeTimeDoc}) {
  const [isActiveHours, setIsActiveHours] = useState(false)
  const [isActiveMinutes, setIsActiveMinutes] = useState(false)
  console.log(activeTimeDoc)
  const [activeTime, setActiveTime] = useState({hours: {active: activeTimeDoc ? activeTimeDoc[0] : '',arr: activeTimeDoc}, minutes: {active: '00', arr: ['00', '30']}})
  return (
    <div className={cl.block}>
      <div className={cl.hoursBlock}>
        <span className={cl.hoursActiveTItle}>
            {activeTime.hours.active}
        </span>
        <div className={isActiveHours ? [cl.selcetHoursBody, cl.selecActive].join` `: cl.selcetHoursBody}>
            {activeTime.hours.arr.map(e=>{
              return (
                <div className={cl.hoursItem} onClick={event=>setActiveTime({...activeTime, hours: {...activeTime.hours, active: event.target.textContent}})}>
                  {e}
                </div>
              )
            })}
        </div>
      </div>
      <div className={cl.minutesBlock}>
        <span className={cl.minutesActiveTItle}>
            {activeTime.minutes.active}
        </span>
        <div className={isActiveHours ? [cl.selcetHoursBody, cl.selecActive].join` `: cl.selcetHoursBody}>
              {activeTime.minutes.arr.map(e=>{
                return (
                  <div className={cl.minutesItem} onClick={event=>setActiveTime({...activeTime, minutes: {...activeTime.minutes, active: event.target.textContent}})}>
                    {e}
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}
