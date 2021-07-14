
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="footerContainer"><p>@ComprenXible. Todos los derechos reservados.</p>
                    <Link to="/Privacy">Politica de privacidad</Link>
                </div>
            </div>
        </div>

    );
}

export default Footer;