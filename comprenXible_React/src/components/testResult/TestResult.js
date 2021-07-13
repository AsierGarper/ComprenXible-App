
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
                        <h3>Análisis completado.</h3>
                        <p> Gracias por utilizar nuestro servicio, tu resultado ha sido registrado. Comprueba tu bandeja de entrada para ver los resultados con más detalle.
                        </p>
                        <p>Puedes ver el historial de tus resultados en todo momento desde tu area personal.</p>
                    </div>
                    <div className="startTestButton">
                        <Link to="/PersonalArea" className="button button--bgTransparent-white">Visita tu Area Personal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestResult;