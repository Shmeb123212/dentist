import React, {useEffect, useMemo, useState} from 'react'
import cl from './SignIn.module.css';
import MyInput from '../UI/MyInput/MyInput';
import {UserCircleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link';
import MyCheckbox from '../UI/MyCheckbox/MyCheckbox';
import MyBtnFilled from '../UI/MyBtnFilled/MyBtnFilled';
import { useDispatch } from 'react-redux';
export default function SignInPage() {

    const [isName, setIsName] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [btnActive, setBtnActive] = useState(false)
    const dispatch = useDispatch()
    

    useMemo(()=>{
        if(isPassword&&isName) {
            setBtnActive(true)
        }
    },[isPassword, isName])
 

  return (
    <div className={cl.block}>
      <div className={cl.leftBlock}>
        <div className={cl.leftWrapper}>
        <div className={cl.logoBlock}>
            <span className={cl.logo}>

            </span>
        </div>
        <div className={cl.leftContent}>
            <div className={cl.leftInfo}>
                <div className={cl.personImg}>
                    <UserCircleIcon color='#fff' width={38} height={38}/>
                </div>
                <div className={cl.personInfo}>
                    <h4 className={cl.personInitials}>T. T. Test</h4>
                    <p className={cl.personPost}>test </p>
                </div>
            </div>
            <div className={cl.leftText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero at debitis, et voluptatum praesentium quibusdam ipsum a doloribus cupiditate, eligendi deserunt facere excepturi.
            </div>
        </div>
        <div className={cl.leftCompany}>
            Test company © 2023
        </div>
        </div>
      </div>
      <div className={cl.rightBlock}>
            <form className={cl.rightContent} id="signIn">
                <h3 className={cl.rightTitle}>Welcome back!</h3>
                <p className={cl.rightDescr}>Please enter your credentials to sign in!</p>
                <MyInput text={'User Name'} isInput={isName} parentForm={'signIn'} setIsInput={setIsName} classInput={cl.nameInput}/>
                <MyInput type={'password'} text={'Password'} parentForm={'signIn'} isInput={isPassword} setIsInput={setIsPassword} classInput={cl.passwordInput}/>
                <div className={cl.rightAdditional}>
                    <MyCheckbox isChecked={isChecked} setIsChecked={setIsChecked} text={'Remember Me'}/>
                    <Link href={'/recovery'}>Forgot Password?</Link>
                </div>
                <div className={cl.btnBlock}>
                    {btnActive?
                        <Link href={'/'} onClick={e=>dispatch({type:'IS_AUTH_CHANGE', info: {value:true}})}>
                            <MyBtnFilled>
                                Sign In 
                            </MyBtnFilled>
                        </Link>
                
                    :
                        <MyBtnFilled classBtn={'disableBtn'}>
                            Sign In 
                        </MyBtnFilled>
                    }
                </div>
                
                
                <div className={cl.signUpBlock}>
                     Don't have an account yet? <Link href={'/signUp'}>Sign up</Link>
                </div>
            </form>
      </div>
    </div>
  )
}
