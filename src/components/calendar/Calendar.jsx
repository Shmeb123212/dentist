import React, { useState } from 'react'
import cl from './Calendar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import CalendarElement from './CalendarElement';




export default function Calendar() {

    const [[monthMode, weekMode, dayWeek], setTableMode] = useState([{mode:'Month',active:true}, {mode:'Week', active:false}, {mode:'Day',active:false}])
  
    const changeSelectItem = (e)=>{
        // dispatch({type:'CHANGE_SELECT_CALENDAR', info: {value:e.target}})
        console.log(e.target)
    }

    const addNewVesit= (e)=>{

    }
  return (
    <div className={cl.block}>
        <div className={cl.head}>
            <h1 className={cl.monthActive}>
                January 2023
            </h1>
            <div className={cl.changeTableBlock}>
                <ul className={cl.changeTableList}>
                    <li className={monthMode.active ? [cl.changeTableItem, cl.changeTableActive].join` ` : [cl.changeTableItem].join` `}>
                        {monthMode.mode}
                    </li> <li className={weekMode.active ? [cl.changeTableItem, cl.changeTableActive].join` ` : [cl.changeTableItem].join` `}>
                        {weekMode.mode}
                    </li> <li className={dayWeek.active ? [cl.changeTableItem,cl.changeTableLast, cl.changeTableActive].join` ` : [cl.changeTableItem, cl.changeTableLast].join` `}>
                        {dayWeek.mode}
                    </li>
                </ul>
                <ul className={cl.mainFuncList}>
                    <li className={[cl.mainFuncItem, cl.mainFuncLast].join` `}>
                        <ChevronLeftIcon color='#8895a2' width={20} height={20}/>
                    </li>
                    <li className={cl.mainFuncItem}>
                        <ChevronRightIcon color='#8895a2' width={20} height={20}/>
                    </li>
                </ul>
            </div>
        </div>
        <CalendarElement />
    </div>
  )
}
