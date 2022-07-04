import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'


const About = () => {
  const Navigate=useNavigate();
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
      Navigate("/")

    }
  }
  useEffect(() => {
    callAboutPage();

  }, [])
  return (
    <div>
    <form method='GET'>
      <div>
        <h1>All information of user</h1>
      </div>

      <div>

        <div>
          <h5>Name</h5>
          <h4>{userData.name}</h4>
          
        </div>
        <div>
          <h5>Email</h5>
          <h4>{userData.email}</h4>
        </div>
        <div>
          <h5>Phone</h5>
          <h4>{userData.phone}</h4>
        </div>
        <div>
          <h5>Date of Birth</h5>
          <h4>{userData.date_of_birth}</h4>
        </div>

      </div>
      </form>
    </div>
  )
}

export default About
