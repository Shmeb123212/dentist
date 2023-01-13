import React, {useState, useMemo, useRef,useEffect} from "react";
import cl from './MyModalVisit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";


const MyModalVisit = ({children})=>{
    const dispatch = useDispatch()
    const visible = useSelector(state=>state.calendarUntils.activeModalToChange)
    const setVisible = (value)=>{
        dispatch({type:'ACTIVE_MODAL_EVENT', info: {value:value}})
    }
    const [modalInfo, setModalInfo] = useState({type: '', doctor: '', dateVisit:'',timeVisit:'',pacient:'', status:'',descr:''})
    const blockModal = useRef('')
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]
    const addModalInfo = (e)=>{
        e.preventDefault();
        setVisible(false); 
        let data = new Date()
        // useFetchingPost({...modalInfo, ...infoObj},'modalOrder', `${new Date()}`);
    }

    let clean = false
    visible && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)

    return (
        <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setVisible(false)}}>
          
                <div  className={rootContentClasses.join` `} >
                    <form action="" id='modal' className={cl.modalForm} onClick={e=>e.stopPropagation()}>
                        <span className={cl.closeModal} onClick={e=>setVisible(false)}>
                            <XMarkIcon width={30} height={30} color={'#00B4D8'}/>
                           
                        </span>
                        {children}
                    </form>
                </div>
           
        </div>
    )
}

export default MyModalVisit