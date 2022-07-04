import React, { useEffect,useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import {UserContext} from '../App';


const Logout = () => {
  const {state,dispatch} =useContext(UserContext)

    const Navigate=useNavigate()
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                accept:"application/json",
                "content-type":'application/json'
            },
            credentials:'include'
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            Navigate('/Userlogin')
        })
    })
  return (
    <>
    <h1>User logout</h1>
      
    </>
  )
}

export default Logout
