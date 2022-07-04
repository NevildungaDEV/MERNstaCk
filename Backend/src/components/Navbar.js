import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';


const Navbar = () => {
  // const { state, dispatch } = useContext(UserContext);
  const { state} = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/allproductsrecord">AllProductList</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Records">AddProduct</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to="/logout">Logout</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/UserLogin">User_Login</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Signup">SignUp</NavLink>
          </li>

        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#"><i class="fa-solid fa-house-user"></i>
            STOCK RECORDS
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <RenderMenu />

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
  
}



export default Navbar
