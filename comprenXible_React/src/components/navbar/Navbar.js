
import React, { useState } from 'react';

import {
    Link
} from "react-router-dom";

import Photo from './images/comprenxible_logo.png'

import './Navbar.css';


function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topnav";
    //     }
    // }
    function toogleNavbar() {
        if (showMenu) {
            setShowMenu(false);
            console.log("false");
        } else {
            setShowMenu(true);
            console.log("true");
        }
    }

    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <img src={Photo} className="logoAnsiedapp" alt="logoAnsiedapp" />
                    {/* <p className="logoSubtitle">Una app de acceXible.</p> */}
                </Link>
                <div className="credentials">
                    <div id="menuToggle">
                        <input type="checkbox" onClick={function () { toogleNavbar() }} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
            <ul id="menu" className={showMenu === true ? "menu--show" : ""}>
                <li><Link to="/SignIn">Iniciar Sesion</Link></li>
                <li><Link to="/Register">Registrarse</Link></li>
                <li><Link to="/PersonalArea">Area Personal</Link></li>
                <li><Link to="/PersonalArea">Contacto</Link></li>
            </ul>
        </header>

    );
}

export default Navbar;