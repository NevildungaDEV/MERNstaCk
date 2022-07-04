import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const Navigate =useNavigate();
  const[user,setUser]=useState({
    name: "",
    email:"",
    phone:"",
    date_of_birth:"",
    password:"",
    confirm_password:""
  })
  let name,value;
  const handleInputs=(e)=>{
    // console.log(e);
    name = e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
  }
  const PostData = async(e)=>{
    e.preventDefault();
    const{ name, email,  phone, date_of_birth, password, confirm_password} =user;
    const res = await fetch('/Signup',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name, email,  phone, date_of_birth, password, confirm_password
      })
    })
    const data = await res.json();
    if(res.status === 422 || !data){
    window.alert("invalid registration")
    console.log("invalid registration")
    } else{
      window.alert("Signup successfull")
    console.log("Signup successfull")

    Navigate("/UserLogin")

    }

  }

  return (
    <div>
      <section>
        <div>
          <div>
            <h2 className="form-title">SIGNUP</h2>
            <form method="POST" className="register_form" id="register-form">

              <div className='form-gorup'>
                <input type='text' name='name' id='name' autoComplete='off' 
                value={user.name}
                onChange={handleInputs}
                placeholder='Your Name'
                />
              </div>

              <div className='form-gorup'>
                <input type='text' name='email' id='email' autoComplete='off' 
                value={user.email}
                onChange={handleInputs}
                placeholder='Email'/>
              </div>
              <div className='form-gorup'>
                <label htmlFor='phone'>

                </label>
                <input type='number' name='phone' id='phone' autoComplete='off' 
                value={user.phone}
                onChange={handleInputs}
                placeholder='Phone'/>
              </div>
              <div className='form-gorup'>
                <label htmlFor='date_of_birth'>

                </label>
                <input type='text' name='date_of_birth' id='date_of_birth' autoComplete='off'
                value={user.date_of_birth}
                onChange={handleInputs}
                placeholder='Date Of Birth'
                />
              </div>
              <div className='form-gorup'>
                <label htmlFor='password'>

                </label>
                <input type='text' name='password' id='password' autoComplete='off' 
                value={user.password}
                onChange={handleInputs}
                placeholder='Your Password'/>
              </div>
              <div className='form-gorup'>
                <label htmlFor='confirm_password'>

                </label>
                <input type='text' name='confirm_password' id='confirm_password' 
                value={user.confirm_password}
                onChange={handleInputs}
                autoComplete='off' placeholder='Confirm Password'/>
              </div>
              <div>
              <button type='register' form='#' value='register' onClick={PostData}>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup
