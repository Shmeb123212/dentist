import React, {useState, useMemo, useRef,useEffect} from "react";
import cl from './MyModalVisit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";


const MyModalVisit = ({children, setIsModal, isModal})=>{
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]

    useMemo(()=>{
        console.log(isModal)
        isModal && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
    },[isModal])
    return (
        <div  className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setIsModal(false)}}>
          
                <div  className={rootContentClasses.join` `} >
                    <form action="" id='modal' className={cl.modalForm} onClick={e=>e.stopPropagation()}>
                        <span className={cl.closeModal} onClick={e=>setIsModal(false)}>
                            <XMarkIcon width={30} height={30} color={'#00B4D8'}/>
                           
                        </span>
                        {children}
                    </form>
                </div>
           
        </div>
    )
}

export default MyModalVisit