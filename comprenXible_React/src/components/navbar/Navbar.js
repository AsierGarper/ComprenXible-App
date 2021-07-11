
import React from 'react';
import {
    Link
} from "react-router-dom";

import Photo from './images/LogoDemo.gif'

import './Navbar.css';

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }


function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={Photo} className="logoAnsiedapp" alt="logoAnsiedapp" />
            </Link>
            <div className="navbarLinks">
                <Link to="/PersonalArea">Area Personal</Link>
                {/* <a href="#PersonalArea">Area Personal</a> */}
                <Link to="/whoweare">Quienes Somos</Link>
                {/* <a href="#PersonalArea">Area Personal</a> */}
            </div>
            <div className="credentials">
                <Link to="/SignIn">Iniciar Sesion</Link>
                <Link to="/Register">Registrarse</Link>
            </div>
        </div>

    );
}

export default Navbar;