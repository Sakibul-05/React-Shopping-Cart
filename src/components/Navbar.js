import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./NavBar.css"


const Navbar = () => {
  let navigate=useNavigate()
  return (
    <div className='navbar-container'>
      <div className="navbar">
        <div className="brand-name"><h3 onClick={()=>navigate("/")}>Shopping Cart</h3></div>
        <div className='nav-links'>
            <NavLink to={"/"} className="nav-link">Home Page</NavLink>
            <NavLink to={"/cart"} className="nav-link">Cart Page</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
