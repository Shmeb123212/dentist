import React from 'react'
import cl from './Calendar.module.css';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import { useDispatch, useSelector } from 'react-redux';
import MyModalVisit from '../UI/modal/MyModalVisit';
import CalendarModal from './CalendarModal';


export default function CalendarComponent({events}) {
    const dispatch = useDispatch()


    const stateColors = useSelector(state=>state.calendarColors)
    
    const onEventClick = arg => {
        const props = arg.event
        console.log(props)
    }

    const onCellSelect = e => {
        const {start} = e
        dispatch({type:'ACTIVE_MODAL_EVENT',info:{value:true}})
        dispatch({type:'CHANGE_ACTIVE_EVENT', info:{value:start}})
    }   

    const onEventChange = arg => {
        const props = arg.event
        console.log(props)
    }
    
    return (
    <div className={cl.calendarBlock}>
    <MyModalVisit>
        <CalendarModal/>
    </MyModalVisit>
    <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
            left:   'title',
            center: '',
            right:  'dayGridMonth,timeGridWeek,timeGridDay prev,next'
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={events}
        eventClick={onEventClick}
        select={onCellSelect}
        editable
        selectable
        eventDrop={onEventChange}
    />
</div>
  )
}
