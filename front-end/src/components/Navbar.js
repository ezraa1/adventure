import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <div className="navb">
            <ul>
                <li><NavLink to="/about" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })}  >About Us </NavLink></li>
                <li><NavLink to="/contact"  style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >Contact Us </NavLink></li>
                <li><NavLink to="/new"  style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >New </NavLink></li>
                <li><NavLink to="/"  style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} >Home </NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;