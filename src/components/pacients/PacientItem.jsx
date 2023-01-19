import React from 'react'
import cl from './Pacients.module.css';

export default function PacientItem({pacient}) {
    

    const getAge = (bday)=>{
        let bdayDate = new Date(pacient.bday)
        console.log((Date.now()  - bdayDate), Date.now(), bdayDate)
        return ~~((Date.now()  - bdayDate)/(31557600000))
    }
    console.log(pacient.credit)

  return (
    <li className={cl.bodyRow}>
        <ul className={cl.bodyRowList}>
            <li className={cl.pacientsItemHead}>
                {pacient.id}
            </li>
            <li className={cl.pacientsItemHead}>
                {pacient.firstName}{pacient.midName}{pacient.lastName}
            </li>
            <li className={cl.pacientsItemHead}>
                {pacient.number}
            </li>
            <li className={cl.pacientsItemHead}>
                {
                   getAge(pacient.bday)
                }
            </li>
            <li className={cl.pacientsItemHead}>
                {pacient.balance? pacient.balance : '--'}
            </li>
            <li className={cl.pacientsItemHead}>
                {pacient.credit? pacient.credit : '--'}
            </li>
            <li className={cl.pacientsItemHead}>
                --
            </li>
        </ul>
    </li>
  )
}
