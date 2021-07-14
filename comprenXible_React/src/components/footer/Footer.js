
import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="footerContainer"><p>@ComprenXible. Todos los derechos reservados.</p>
                    <a href="#privacy">Politica de privacidad</a>
                </div>
            </div>
        </div>

    );
}

export default Footer;