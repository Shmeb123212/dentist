import React, { useMemo, useState, useEffect } from 'react'
import MySelect from '../UI/select/MySelect'
import cl from './Calendar.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function CalendarModal({dateDisable = false}) {
    const dispatch = useDispatch()
    const [isSelect, setSelect] = useState([{active:true, name: 'Лечение'}, {active:false, name:'Диагностика'},{active:false, name:'Консультация'},{active:false, name:'Санация'},{active:false, name:'Осмотр'},{active:false, name:'Другое'}, ])
    const [valueTime, setValueTime] = useState(30)
    const [valueDayTime, setValueDayTime] = useState('')
    useMemo(()=>{
        console.log(isSelect)
    },[isSelect])
    const activeDate = useSelector(state=>state.calendarUntils.activeEventToChange)

    const [isPacient, setIsPacient] = useState('')
    const [isDoctor, setIsDoctor] = useState('')
    const handleActivePac = (e)=>{
        e.preventDefault();
        setIsPacient(true)
    }
    const handleActiveDoc = (e)=>{
        e.preventDefault();
        setIsDoctor(true)
    }
    const pacientsState = useSelector(state=>state.pacients)
    console.log(pacientsState)
    const doctorsState = useSelector(state=>state.doctors)

    const [searchPacients, setSearchPacients] = useState("");
    const [pacientsResults, setPacientsResults] = useState([]);

    const [searchDoctors, setSearchDoctors] = useState("");
    const [doctorsResults, setDoctorsResults] = useState([]);



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
        setSearchPacients(e.target.textContent)
        setIsPacient(false)
    }
    const handleSearchDoc = e => {
        e.preventDefault()
        setSearchDoctors(e.target.textContent)
        setIsDoctor(false)
    }

    const setVisit = e => {
        e.preventDefault();
        dispatch({type:'ADD_EVENT_CALENDAR', info: {value: {id:new Date(),title:searchPacients,start:activeDate, type: isSelect.filter(e=>e.active)[0], time: valueDayTime, duration: valueTime,pacient:searchPacients, doctor: searchDoctors}}})
    }
    return (
    <>
        <div className={cl.topBlock}>
            <div className={cl.selectsBlock}>
                <span>Тип записи</span>
                <MySelect setSelect={setSelect} selectItems={isSelect} defaultItem={isSelect.filter(e=>e.active)[0]}/>
            </div>
            {dateDisable ? '' : 
                <div className={cl.selectsBlock}>
                <span>Время визита</span>
                <input defaultValue={'9:00'} value={valueDayTime} onChange={e=>setValueDayTime(e.target.value)} type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
            </div>}
            <div className={cl.selectsBlock}>
                <span>Продолжительность</span>
                <div class={cl.quantity}>
                    <input type="number" min="30" max="3600" step="30"  defaultValue={30} value={valueTime} onChange={e=>setValueTime(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className={cl.midBlock}>
            <div className={cl.selectBlock}>
                <span>Пациент</span>
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
            <div className={cl.selectBlock}>
                <span>Доктор</span>
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
                        <li onClick={e=>handleSearchDoc(e)} >{item.firstName} {item.midName} {item.lastName}</li>
                        ))}
                    </ul> : ''}
                </div>
               
            </div>

            <div className={cl.bottomBlock}>
                <button onClick={e=>setVisit(e)}>Создать визит</button>
            </div>
        </div>
    </>
  )
}
