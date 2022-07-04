import React from 'react'

import  { useEffect, useState } from 'react'



const Home = () => {

  const[userData,setUserData]=useState({});
  const callAboutPage = async () => {
    try {
      const resBack = await fetch('/About',{
        method:"GET",
        headers:{
          Accept:'application/json',
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data =await resBack.json();
      // console.log(data);
      setUserData(data);
      if (!resBack.status === 201) {
        const error =new Error(resBack.error)
        throw error;
      }

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    callAboutPage();

  }, [])

  return (
    <div>
    <form method='GET'>
    <div>
    <h1>WELCOME</h1>
    </div>
    <div>
    <h3>{userData.name}</h3>
    </div>
    </form>
    </div>
    
   
  )
}

export default Home
