import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <div>
            <ul>
                <li><NavLink to="/about">About Us </NavLink></li>
                <li><NavLink to="/contact">Contact Us </NavLink></li>
                <li><NavLink to="/new">New </NavLink></li>
                <li><NavLink to="/">Home </NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;