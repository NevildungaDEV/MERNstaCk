import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../App';

const UserLogin = () => {

  const {dispatch} =useContext(UserContext)
  

  const Navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/Userlogin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email, password
      })
    })

    const data =await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials")
    }else{
      dispatch({type:"USER",payload:true})
      window.alert("User login successfull");
      Navigate("/Records")
      
    }
  }
  
  return (
    <>
    <section>
        <div>
          <div>
            <h3 className="form-title">USER LOGIN</h3>
            <form method="POST" className="register_form" id="register-form">

              <div className='form-gorup'>
                <label htmlFor='email'>
                
                </label>
                <input type="email" name='email' id='email' autoComplete='off' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'/>
              </div>
      
              
              <div className='form-gorup'>
                <label htmlFor='password'>
                </label>
                <input type='password' name='password' id='password' autoComplete='off' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Your Password'/>
              </div>

              <div>
              <button type='submit' form='#' value='submit' 
              onClick={loginUser}
              >LOG IN</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserLogin
