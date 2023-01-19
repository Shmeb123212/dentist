import React, { useMemo, useState, useEffect } from 'react'
import MySelect from '../UI/select/MySelect'
import cl from './Calendar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTime } from '../../untils/getCurrentTime';
import MyTimeSelect from '../UI/timeSelect/MyTimeSelect';
export default function CalendarModal({dateDisable = false, modalId}) {

    const dispatch = useDispatch()
    const [isStatus, setStatus] = useState([{active:true, name: 'Не подтвержден'}, {active:false, name:'Подтвержден'},{active:false, name:'Пришел'},{active:false, name:'В кресле'},{active:false, name:'Не пришел'}])
    const [isSelect, setSelect] = useState([{active:true, name: 'Лечение'}, {active:false, name:'Диагностика'},{active:false, name:'Консультация'},{active:false, name:'Санация'},{active:false, name:'Осмотр'},{active:false, name:'Другое'}, ])
    const [valueTime, setValueTime] = useState(30)
    const [isPacient, setIsPacient] = useState('')
    const [isDoctor, setIsDoctor] = useState('')
    const pacientsState = useSelector(state=>state.pacients)
    const doctorsState = useSelector(state=>state.doctors)
    const [searchPacients, setSearchPacients] = useState("");
    const [pacientsResults, setPacientsResults] = useState([]);
    const [searchDoctors, setSearchDoctors] = useState("");
    const [doctorsResults, setDoctorsResults] = useState([]);
    const stateEvents = useSelector(state=>state.calendarEvents)
    const thisEvent = stateEvents.filter(e=>e.id==modalId)[0]
    const [valueDayTime, setValueDayTime] = useState()

    useMemo(()=>{
        thisEvent && console.log(getCurrentTime(`${thisEvent.start.getHours()}`,`${thisEvent.start.getMinutes()}`))
        thisEvent && setValueDayTime(getCurrentTime(`${thisEvent.start.getHours()}`,`${thisEvent.start.getMinutes()}`))
    },[thisEvent])

    useMemo(()=>{
        console.log(stateEvents.filter(e=>e.id==modalId)[0])
    },[stateEvents])

    const handleActivePac = (e)=>{
        e.preventDefault();
        setIsPacient(true)
    }

    const handleActiveDoc = (e)=>{
        e.preventDefault();
        setIsDoctor(true)
    }
 
    const handleChangesPacient = e => {
        setSearchPacients(e.target.value);
    };
    
    const handleChangesDoctors = e => {
        setSearchDoctors(e.target.value);
    };

    useEffect(() => {
        const results = pacientsState.filter(pacient =>
            pacient.firstName.toLowerCase().includes(searchPacients.toLocaleLowerCase())
        );
        setPacientsResults(results);
    }, [searchPacients]);
      
    useEffect(() => {
      const results = doctorsState.filter(doctor =>
        doctor.firstName.toLowerCase().includes(searchDoctors.toLocaleLowerCase())
      );
      setDoctorsResults(results);
    }, [searchDoctors]);

    const handleSearchPac = e => {
        e.preventDefault();
        setSearchPacients(e.target.textContent);
        setIsPacient(false);
    }
    const handleSearchDoc = (e, item) => {
        e.preventDefault()
        
        setSearchDoctors(e.target.textContent)
        setIsDoctor(false)
    }

    const setVisit = e => {
        
        e.preventDefault();
        
        dispatch({type:'EDIT_EVENT_CALENDAR', info: {id:modalId,value: {title:searchPacients, type: isSelect.filter(e=>e.active)[0], time: valueDayTime, duration: valueTime,pacient:searchPacients, doctor: searchDoctors, status: isStatus}}})
        
        // dispatch({type:'EDIT_NEW_PACIENT', info: {id:pacientsState.filter(e=>e.firstName == searchPacients.split` `[0])[0].id, value: `${+(pacientsState.filter(e=>e.firstName == searchPacients.split` `[0])[0].credit.split`.`[0])+(-10)}.00$`}})
        
        // logs
        
        console.log(pacientsState.filter(e=>e.firstName == searchPacients.split` `[0])[0].id)
        
        // set clear
        
        setStatus([{active:true, name: 'Не подтвержден'}, {active:false, name:'Подтвержден'},{active:false, name:'Пришел'},{active:false, name:'В кресле'},{active:false, name:'Не пришел'}]);
        setValueTime(30);
        setSelect([{active:true, name: 'Лечение'}, {active:false, name:'Диагностика'},{active:false, name:'Консультация'},{active:false, name:'Санация'},{active:false, name:'Осмотр'},{active:false, name:'Другое'}, ]);
        setSearchPacients("");
        setSearchDoctors("");
        dispatch({type:'ACTIVE_MODAL_EVENT',info:{value:false}})

    }
    return (
    <>
        <div className={cl.topBlock}>
            <div className={cl.selectBlock}>
                <span className={cl.selectsBlock}>Пациент</span>
                <div className={cl.selectSearchBlock}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchPacients}
                        onChange={handleChangesPacient}
                        onClick={handleActivePac}

                    />
                    {isPacient?<ul>
                        {pacientsResults.map(item => (
                        <li onClick={e=>handleSearchPac(e)}>{item.firstName} {item.midName} {item.lastName}</li>
                        ))}
                    </ul>:''}
                </div>
            </div>
            <div className={cl.selectsBlock}>
                <span className={cl.selectsBlock}>Тип записи</span>
                <MySelect setSelect={setSelect} selectItems={isSelect} defaultItem={isSelect.filter(e=>e.active)[0]}/>
            </div>
        </div>
        <div className={cl.midBlock}>
            
            <div className={cl.selectBlock}>
                <span className={cl.selectsBlock}>Доктор</span>
                <div className={cl.selectSearchBlock}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchDoctors}
                        onChange={handleChangesDoctors}
                        onClick={handleActiveDoc}
                    />
                    {isDoctor ? <ul>
                        {doctorsResults.map(item => (
                        <li onClick={e=>handleSearchDoc(e, item)} >{item.firstName} {item.midName} {item.lastName}</li>
                        ))}
                    </ul> : ''}
                </div>
            </div>
            {!searchDoctors ? '' : 
                <div className={cl.selectsBlock}>
                <span>Время визита</span>
                <MyTimeSelect activeTimeDoc={searchDoctors.timeActive}/>
            </div>}
            <div className={cl.selectsBlock}>
                <span>Продолжительность</span>
                <div class={cl.quantity}>
                    <input type="number" min="30" max="3600" step="30"  defaultValue={30} value={valueTime} onChange={e=>setValueTime(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className={cl.selectMidBottom}>
            <div className={cl.selectBlock}>
            <span className={cl.selectsBlock}>Статус</span>
            <MySelect setSelect={setStatus} selectItems={isStatus} defaultItem={isStatus.filter(e=>e.active)[0]}/>
            </div>
        </div>

        <div className={cl.bottomBlock}>
            <button className={cl.bottonSetBtn} onClick={e=>setVisit(e)}>Создать визит</button>
            <span className={cl.bottomLine}></span>
        </div>
</>
  )
}
