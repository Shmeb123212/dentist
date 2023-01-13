import React from 'react'
import cl from './Pacients.module.css';
import { useSelector, useDispatch } from 'react-redux';
import PacientItem from './PacientItem';
import MyModalVisit from '../UI/modal/MyModalVisit';

export default function PacientsComponent() {
    const dispatch = useDispatch()


    
   

    const pacientsState = useSelector(state=>state.pacients)
    const setPacient = (e)=>{
        dispatch({type:'ADD_NEW_PACIENT', info:{value:{...pacientsState[0], id: pacientsState.length+1 }}})
    }
  return (
    <div className={cl.pacientsBlock}>
    
        <div className={cl.pacientsHead}>
            <ul className={cl.pacientsListHead}>
                <li className={cl.pacientsItemHead}>
                    Id
                </li>
                <li className={cl.pacientsItemHead}>
                    Full name
                </li>
                <li className={cl.pacientsItemHead}>
                    Tel
                </li>
                <li className={cl.pacientsItemHead}>
                    Age
                </li>
                <li className={cl.pacientsItemHead}>
                    Balance
                </li>
                <li className={cl.pacientsItemHead}>
                    Credit
                </li>
                <li className={cl.pacientsItemHead}>
                    Actions
                </li>
            </ul>
        </div>
        <div className={cl.pacientsBody}>
            <ul className={cl.pacientsBodyList}>
                {pacientsState.map((pacient,id)=>{
                    return (
                        <React.Fragment key={id}>
                            <PacientItem pacient={pacient}/>
                        </React.Fragment>
                    )
                })}
            </ul>
            <button onClick={e=>setPacient(e)}>New Pacient</button>
        </div>
    </div>
  )
}
