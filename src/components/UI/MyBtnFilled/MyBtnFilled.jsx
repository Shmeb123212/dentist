import React from 'react'
import cl from './MyBtnFilled.module.css';
import Link from 'next/link';

export default function MyBtnFilled({href, classBtn,parentForm='', children,handleFunc=()=>{}, ...props}) {
  return (
   <>
        <button className={[cl.btn, classBtn].join` `} form={parentForm} onClick={e=>handleFunc()} {...props}>
            {children}
        </button>  
   </>
    
  )
}
