import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function index() {

  const isAuth = useSelector(state=>state.signInAuth.isAuth)
  useEffect(()=>{
    isAuth ? '' : window.location.href = `${window.location.href}signIn`
    console.log(window.location.href)
  },[])

  return (
    <div>
      
    </div>
  )
}
