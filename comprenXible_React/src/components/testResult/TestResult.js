
import React from 'react';
import {
    Link
} from "react-router-dom";
import './testResult.css';
import Modals from '../modals/Modals.js';


function TestResult() {
    return (
        <div className="testSection">
            <div className="wrapper">
                <Modals />
                <div className="testContainer">
                    <div className="testWelcome">
                        <h3>Análisis realizado correctamente.</h3>
                        <p>Gracias por utilizar nuestro servicio, tu resultado ha sido registrado. Puedes verlo en todo momento en tu Área Personal.
                        </p>
                        <p> Pulsa en el enlace siguiente para recibir tus resultados via email.</p>
                    </div>
                    <div className="startTestButton">
                        <Link to="/" className="button button--bgTransparent-white">ENVIAR RESULTADOS</Link>
                        {/* HAY QUE CAMBIAR ESTE LINK */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestResult;