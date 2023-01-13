import React from 'react'
import cl from './Doctors.module.css';
import { useDispatch, useSelector } from 'react-redux';
import DoctorItem from './doctorItem';

export default function DoctorsComponent() {
    const dispatch = useDispatch()



   

    const doctorsState = useSelector(state=>state.doctors)
    const setDoctor = (e)=>{
        dispatch({type:'ADD_NEW_DOCTOR', info:{value:{...doctorsState[0], id: doctorsState.length+1 }}})
    }
  return (
    <div className={cl.doctorsBlock}>
        <div className={cl.doctorsHead}>
            <ul className={cl.doctorsListHead}>
                <li className={cl.doctorsItemHead}>
                    Id
                </li>
                <li className={cl.doctorsItemHead}>
                    Full name
                </li>
                <li className={cl.doctorsItemHead}>
                    Tel
                </li>
                <li className={cl.doctorsItemHead}>
                    Age
                </li>
                <li className={cl.doctorsItemHead}>
                    Balance
                </li>
                <li className={cl.doctorsItemHead}>
                    Credit
                </li>
                <li className={cl.doctorsItemHead}>
                    Actions
                </li>
            </ul>
        </div>
        <div className={cl.doctorsBody}>
            <ul className={cl.doctorsBodyList}>
                {doctorsState.map((doctor,id)=>{
                    return (
                        <React.Fragment key={id}>
                            <DoctorItem doctor={doctor}/>
                        </React.Fragment>
                    )
                })}
            </ul>
            <button onClick={e=>setDoctor(e)}>New Doctor</button>

        </div>
    </div>
  )
}
