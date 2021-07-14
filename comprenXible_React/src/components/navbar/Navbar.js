
import React, { useState, useEffect } from 'react';

import {
    Link
} from "react-router-dom";

import Photo from './images/comprenxible_logo.png'

import './Navbar.css';


function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (!props.sessionUserCredentials) {
            if (sessionStorage.getItem("sessionUserCredentials")) {
                sessionStorage.removeItem("sessionUserCredentials");
            }
            console.log("sessionUserCredentials true")
        } else {

            console.log("sessionUserCredentials false")
        }
    }, [props.sessionUserCredentials])

    function toogleNavbar() {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
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
                {props.sessionUserCredentials ? <>
                    <li><a href="?" onClick={() => props.setSessionUserCredentials(false)}>Logout</a></li>
                    <li><Link to="/PersonalArea">Area Personal</Link></li>
                </> : <>
                    <li><Link to="/SignIn">Iniciar Sesion</Link></li>
                    <li><Link to="/Register">Registrarse</Link></li>
                </>}
                <li><Link to="/PersonalArea">Contacto</Link></li>

            </ul>
        </header>

    );
}

export default Navbar;