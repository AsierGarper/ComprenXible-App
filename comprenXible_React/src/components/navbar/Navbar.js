
import React, { useState } from 'react';

import {
    Link
} from "react-router-dom";

import Photo from './images/LogoDemo.gif'

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
                <Link to="/SignIn"><li>Iniciar Sesion</li></Link>
                <Link to="/Register"><li>Registrarse</li></Link>
                <Link to="/PersonalArea"><li>Area Personal</li></Link>
                <Link to="/PersonalArea"><li>Contacto</li></Link>
            </ul>

        </header>

    );
}

export default Navbar;