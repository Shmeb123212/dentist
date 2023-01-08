import React from 'react'
import cl from './MyCheckbox.module.css'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function MyCheckbox({isChecked, setIsChecked, text}) {
   
return (
    <div className={cl.block}>
        <div className={cl.inputBlock}>
            <input type={'checkbox'} className={cl.checkbox} value={isChecked} onChange={e=>setIsChecked(e.target.value)}/>
            <span className={cl.inputOver}>
                <CheckIcon color='#84d2f6'  width={15} height={15}/>
            </span>
        </div>
        <span className={cl.text}>{text}</span>
    </div>
  )
}
