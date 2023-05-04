import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Proteg = () => {
   const {nameuser} = useSelector(state => state)
  if(nameuser.length >= 4){
    return <Outlet/>
  }else{
    return <Navigate to='/' />
  }
}

export default Proteg
