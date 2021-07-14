import React from "react";
import './privacy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import { useHistory } from "react-router-dom";

function Privacy(props) {
    const history = useHistory();
    return (

        <div className="Privacy">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">    
                <div className="privacyContainer">
            <span className="quitPrivacy"  onClick={()=> history.push("/")}><FontAwesomeIcon icon={faTimesCircle} class="modalClose" /></span>        
                    <p>
                        <h1>
                            <span>POLÍTICA DE PRIVACIDAD</span>
                        </h1>
                        <hr></hr>
                        <p>

                            Comprenxible garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD). </p>

                        <p>  El uso de comprenxible app implica la aceptación de esta Política de Privacidad.
                        </p>

                        <h2>Identidad del responsable:</h2>
                        <ul>
                            <li>Titular: Comprenxible</li>
                            <li>CIF: XXXX-XXXX-XXXX-XXXX</li>
                            <li>Dirección: C/ María Díaz de Haro 48, Bilbao</li>
                            <li>Correo electrónico: <a href="comprenxible@gmail.com"></a>comprenxible@gmail.com</li>                            
                        </ul>

                        <h2>Tratamiento de datos personales:</h2>

                        <p>Comprenxible te pedirá los siguientes datos personales: nombre, correo electrónico y género, además de almacenar tus respuestas al test y los resultados.</p>
                        <p>Tus datos personales estarán encriptados y solamente tú tendrás acceso a ellos. Comprenxible no puede leer datos de correo electrónico, nombre, género, número de tests hechos por ti, ni las fechas en que fueron realizados los mismos.</p>
                        <p>Sin embargo, Comprenxible sí que almacena los resultados y distintas estadísiticas de los tests de forma completamente anónima. Estos datos no serán compartidos con terceros y se utilizan únicamente para la mejora de nuestros servicios. En ningún caso las conversaciones con Berta serán almacenadas ni leídas.</p>
                        <p>Como usuario de Comprenxible, solo tú tienes acceso a tus datos, que puedes consultar y modificar en cualquier momento en tu Área Personal.</p>

                        

                        </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;