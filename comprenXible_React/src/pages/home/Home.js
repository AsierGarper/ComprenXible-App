import React from "react";
import {
    Link
} from "react-router-dom";
import './Home.css';
import ProfilePicture1 from '../images/mireia.png';
import ProfilePicture2 from '../images/asier.png';
import ProfilePicture3 from '../images/enrique.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function Home(props) {
    return (

        <div className="Home">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
                <div className="initTestContainer">
                    <Link to="/TestStart" className="button button--bgTransparent-white">COMENZAR TEST</Link>
                </div>
                <div className="textSection">
                    <h4>¿En que consiste?</h4>
                    <hr></hr>
                    <p>ComprenXible App es un sistema de detección de sintomas depresivos, cuadros de ansiedad y demás afecciones derivadas del aislamiento.
                        Durante la pandemia, la población general ha tenido menos contacto con sus amigos y conocidos y se ha incrementado el sentimiento de apatía. El aislamiento ha generado soledad y angustia, y se han incrementado los trastornos alimenticios.
                    </p>
                    <p> Sobre todo para los más jóvenes, la imposibilidad de estar con sus amigos y desarrollarse en un entorno social normal ha sido devastadora. La incomunicación, la falta de intimidad y el hecho de no poder separarse de la familia han sido factores importantes en este proceso. </p>                        
                    <p> Comprenxible utiliza la analítica predictiva para detectar posibles cuadros sintomáticos de ansiedad y depresión. Tras hacer nuestro test en dos pasos, los usuarios reciben al instante los análisis junto con la recomendación.</p>
                </div>
                <div className="textSection">
                    <h4>¿Quienes somos?</h4>
                    <hr></hr>
                    <p>Somos un equipo de desarrolladores web Full Stack, asentado en Bilbao (Vizcaya), con ganas de desarrollar todo tipo de aplicaciones con todo tipo de tecnologías. </p>
                    <p>ComprenXible es una pequeña demo, realizada en tiempo récord, de todo lo que podemos llegar a hacer.</p>
                    <div className="picturesContainer">
                        <div className="infoContainer">
                            <img src={ProfilePicture1} alt="" className="profilePicture"></img>
                            <p>Mireia Taboada Zapatero</p>
                            <p>taboadamirella@gmail.com</p>
                            <FontAwesomeIcon icon={faTimesCircle} />
                            <p>PENDIENTE PONER EMOTICONOOOOOOOOOOOS LINKEDIN Y GITHUB</p>
                            <hr></hr>
                        </div>
                        <div className="infoContainer">
                            <img src={ProfilePicture2} alt="" className="profilePicture"></img>
                            <p>Asier García Pérez</p>
                            <p>asiergarper@gmail.com</p>
                            <hr></hr>
                        </div>
                        <div className="infoContainer">
                            <img src={ProfilePicture3} alt="" className="profilePicture"></img>
                            <p>Enrique Ortega Cabello</p>
                            <p>ortega.cabello.7@gmail.com</p>
                            <hr id="finalLine"></hr>
                        </div>
                    </div>
                    <div className="textSection">
                        <h4>Agradecimientos</h4>
                        <hr></hr>
                        <p>A todo el equipo de BBKBootcamp, por sus largas sesiones de aprendizaje con</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;