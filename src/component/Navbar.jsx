import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

const navStyles = ({isActive}) => {
    return {
        fontWeight : isActive ?  "bold" : "normal",
        textDecoration: isActive ? "none" : "underline",
        fontSize: isActive ? "30px" : "20px",
        color : isActive ? "black" : "white"
    }
}
  return (
    <nav className='nav'>
    <NavLink style={navStyles} to="/">Home</NavLink>
    <NavLink style={navStyles} to="/Add">Add</NavLink>
    </nav>
  )
}

export default Navbar