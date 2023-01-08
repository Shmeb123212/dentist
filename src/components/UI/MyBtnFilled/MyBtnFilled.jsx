import React from 'react'
import cl from './MyBtnFilled.module.css';
import Link from 'next/link';

export default function MyBtnFilled({href, classBtn,parentForm='', children,handleFunc=()=>{}}) {
  return (
   <>
        <button className={[cl.btn, classBtn].join` `} form={parentForm} onClick={e=>handleFunc()}>
            {children}
        </button>  
   </>
    
  )
}
