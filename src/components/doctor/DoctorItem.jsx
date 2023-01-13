import React from 'react'
import cl from './Doctors.module.css';

export default function DoctorItem({doctor}) {
    

    const getAge = (bday)=>{
        let bdayDate = new Date(doctor.bday)
        console.log((Date.now()  - bdayDate), Date.now(), bdayDate)
        return ~~((Date.now()  - bdayDate)/(31557600000))
    }

  return (
    <li className={cl.bodyRow}>
        <ul className={cl.bodyRowList}>
            <li className={cl.doctorsItemHead}>
                {doctor.id}
            </li>
            <li className={cl.doctorsItemHead}>
                {doctor.firstName}{doctor.midName}{doctor.lastName}
            </li>
            <li className={cl.doctorsItemHead}>
                {doctor.number}
            </li>
            <li className={cl.doctorsItemHead}>
                {
                   getAge(doctor.bday)
                }
            </li>
            <li className={cl.doctorsItemHead}>
                {doctor.balance? doctor.balance : '--'}
            </li>
            <li className={cl.doctorsItemHead}>
                {doctor.credit? doctor.credit : '--'}
            </li>
            <li className={cl.doctorsItemHead}>
                --
            </li>
        </ul>
    </li>
  )
}
