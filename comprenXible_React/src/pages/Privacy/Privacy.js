import React from "react";
import './privacy.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function Privacy(props) {
    return (

        <div className="Privacy">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
                <div className="privacyContainer">
                    <p>AQUI, PLAGIAR TODO LO DE ACCESIBLE</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;