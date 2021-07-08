
import React from 'react';
import {
    Link
} from "react-router-dom";
import './testStart.css';
import Modals from '../modals/Modals.js';


function TestStart() {
    return (
        <div className="testSection">
            <div className="wrapper">
                <Modals />
                <div className="testContainer">
                    <div className="testWelcome">
                        <h3>Bienvenido al análisis de Ansiedapp:</h3>
                        <p>En esta prueba, tendrás que realizar un pequeño test basado en 9 preguntas con 4 posibles respuestas. Selecciona la que más se ajuste a la realidad, y pulsa en "Siguiente" para saltar a la siguiente pregunta.
                        </p>
                        <p> Posteriormente, tendrás que mantener una breve conversación con Berta, nuestra asistente experta en análisis predictivo de enfermedades relacionadas con el aislamiento.</p>
                        <p>Puedes salir de la prueba en cualquier momento pulsando el botón superior derecho, volviendo así a la página de inicio. No obstante perderías todos tus progresos, por lo que te recomendamos finalizar la prueba para registrar tus resultados.</p>
                    </div>
                    <div className="startTestButton">
                        <Link to="/InitTest" className="button button--bgTransparent-white">COMENZAR TEST</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestStart;