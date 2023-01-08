import React from 'react'
import cl from './MyInput.module.css'

export default function MyInput({text, setIsInput, isInput, type = 'text', classInput, parentForm}) {
  return (
    <div className={cl.block}>
        <label className={cl.label}>{text}</label>
        <input type={type} required={true} className={[cl.input, classInput].join` `} placeholder={text} form={parentForm} onChange={e=>setIsInput(e.target.value)} value={isInput}/>
    </div>
  )
}
