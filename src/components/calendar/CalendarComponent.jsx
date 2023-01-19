import React, { useState } from 'react'
import cl from './Calendar.module.css';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import { useDispatch, useSelector } from 'react-redux';
import MyModalVisit from '../UI/modal/MyModalVisit';
import CalendarModal from './CalendarModal';


export default function CalendarComponent({events}) {

    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const [isActiveModalId, setIsActiveModalId] = useState('');

    const onEventClick = arg => {
        const props = arg.event;
        setIsActiveModalId(Object.values({...props})[1].publicId);
        setIsModal(true)
    }

    const onCellSelect = e => {
        const {start, ...props} = e
        const isModal = (new Date()).getTime()
        setIsActiveModalId(isModal)
        console.log(new Date(start).getHours(), new Date(start).getMinutes())
        setIsModal(true)
        dispatch({type:'ADD_EVENT_CALENDAR', info: {value: {id:isModal,title:'',start:start, type: '', time: '', duration: '',pacient:'', doctor: '', status: ''}}})
    }

    const onEventChange = arg => {
        const props = arg.event
    }

    return (

    <div className={cl.calendarBlock}>
        <MyModalVisit setIsModal={setIsModal} isModal={isModal}>
            <CalendarModal modalId={isActiveModalId} />
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
