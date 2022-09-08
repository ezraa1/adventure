import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
  
    return(
        <div className="navb">
        
            <ul>
            <NavLink to= "/" ><h3>Adventure Stories</h3></NavLink>
                <li><NavLink to="/about" style={({ isActive }) => ({
              color: isActive ? '' : '#545e6f',
              background: isActive ? '#f0f0f0' : '',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })}  >About Us </NavLink></li>
                <li><NavLink to="/contact"  style={({ isActive }) => ({
              color: isActive ? '' : '#545e6f',
              background: isActive ? '#f0f0f0' : '',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >Contact Us </NavLink></li>
                <li><NavLink to="/new"  style={({ isActive }) => ({
              color: isActive ? '' : '#545e6f',
              background: isActive ? '#f0f0f0' : '',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >New </NavLink></li>
                <li><NavLink to="/home"  style={({ isActive }) => ({
              color: isActive ? '' : '#545e6f',
              background: isActive ? '#f0f0f0' : '',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >Home </NavLink></li>


            </ul>
        </div>
    )

}

export default Navbar;