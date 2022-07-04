import React, { createContext, useReducer } from 'react'
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Records from './components/Records'
import UserLogin from './components/UserLogin'
import Signup from './components/Signup'
import Allrecords from './components/Allrecords'
import EditCom from './components/EditCom'
import DeleteCom from './components/DeleteCom'
import Logout from './components/Logout'

// import ShowRecord from './components/ShowRecord'
import { initialState,reducer } from './reducer/UseReducer'


//   contexAPI
export const UserContext = createContext();

const Routing=() =>{
  return(
   <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route path='/About' element={<About/>} />
   <Route path='/Records' element={<Records/>}/>
   <Route path='/UserLogin' element={<UserLogin/>} />
   <Route path='/Signup' element={<Signup/>} />
  
   <Route path="/allproductsrecord" element={<Allrecords/>}/>
   <Route path="/edit/:id" element={<EditCom/>}></Route>
   <Route path="/delete/:id" element={<DeleteCom/>}></Route>
   <Route path='/logout' element={<Logout/>}></Route>
   
   </Routes>

  )
}

const App = () => {
const[state,dispatch] = useReducer(reducer,initialState)
  return ( 
    <>
    <UserContext.Provider value={{ state ,dispatch}}>
    <Navbar/>
    <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App

