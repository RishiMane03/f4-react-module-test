import React from "react";
import { Link,NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = ()=>{
    return(
        <nav className="nav">
            <div className="LOGO">
                <p>Shopping Cart</p>
            </div>

            <div className="links">
                <NavLink to="/"> Home Page </NavLink>
                <NavLink to="/cart"> Cart Page </NavLink>
            </div>
        </nav>
    )
}

export default NavBar

