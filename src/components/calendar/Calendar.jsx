import React from 'react'
import CalendarComponent from './CalendarComponent'
import { useSelector } from 'react-redux'
import cl from './Calendar.module.css';

export default function Calendar() {

    const eventsState = useSelector(state=>state.calendarEvents)
  return (
    <div>
        <CalendarComponent events={eventsState}/>
    </div>
  )
}
