import React from 'react'
import cl from './Header.module.css';
import { Bars3BottomLeftIcon, Cog8ToothIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import Link from 'next/link';


export default function Header({isHiddenSidebar}) {
    const dispatch = useDispatch();


    function handlePrevMonth() {
        // setMonthIndex(monthIndex - 1);
      }
      function handleNextMonth() {
        // setMonthIndex(monthIndex + 1);
      }
      function handleReset() {
        // setMonthIndex(
        //   monthIndex === dayjs().month()
        //     ? monthIndex + Math.random()
        //     : dayjs().month()
        // );
      }
  return (
   <header className={cl.header}>
    <div className={cl.content}>
        <div className={cl.leftBlock}>
            <span className={cl.leftBarsBlock} onClick={e=>dispatch({type:'IS_HIDDEN_SIDEBAR', info: {value:!isHiddenSidebar}})}>
                <Bars3BottomLeftIcon color={'#495057'} width={25} height={25}/>
            </span>
            <MagnifyingGlassIcon color={'#495057'} width={25} height={25}/>
        </div>
        <div className={cl.rightBlock}>
            <div className={cl.settingsBlock}>
                <Cog8ToothIcon color={'#495057'} width={25} height={25}/>
            </div>
            <div className={cl.profileBlock}>
                {/* <img className={cl.profileIcon} src={''}></img> */}
                <Link href={'/settings'}>
                    <UserCircleIcon color={'#495057'} width={35} height={35}/>
                </Link>
                <div className={cl.initialsBlock}>
                    <span className={cl.post}>Admin</span>
                    <span className={cl.initials}>Test Test</span>
                </div>
            </div>
        </div>
    </div>
   </header>
  )
}
