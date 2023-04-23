import React from 'react';
import logo from '../../Images/Persona_logo.png';
import './style.css'

function Navbar() {
    return (
        <nav>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                PERSONA
            </div>
            <ul className="navbar-links">
                <li><a href="#">STORE</a></li>
                <li><a href="#">COMMUNITY</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SUPPORT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
