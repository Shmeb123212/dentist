import React, {useState} from 'react';
import cl from './MySelect.module.css';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function MySelect({selectItems, defaultItem, setSelect}) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className={cl.selectBlock}>
        <div className={isActive ? [cl.selectHead, cl.activeHead].join` ` :cl.selectHead} onClick={e=>setIsActive(!isActive)}>
            {defaultItem.name}
            <ChevronDownIcon color='#707070' width={20} height={20}/>
        </div>
        <div className={isActive ? [cl.selectBody, cl.active].join` ` : cl.selectBody}>
            {selectItems.map(select=>{
                return (
                    <div className={cl.selectItem} onClick={e=>{e.preventDefault();setSelect(selectItems.map(item=>item.name===e.target.textContent?{...item, active:true}:{...item, active:false}));setIsActive(false)}}>
                        {select.name}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
