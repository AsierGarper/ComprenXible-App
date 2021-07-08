import React from "react";
import {
    Link
} from "react-router-dom";
import './Home.css';
import ProfilePicture1 from '../images/mireia.png';
import ProfilePicture2 from '../images/asier.png';
import ProfilePicture3 from '../images/enrique.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function Home() {
    return (

        <div className="Home">
            <Navbar />
            <div className="wrapper">
                <div className="initTestContainer">
                    <Link to="/TestStart" className="button button--bgTransparent-white">COMENZAR TEST</Link>
                </div>
                <div className="textSection">
                    <h4>¿En que consiste?</h4>
                    <hr></hr>
                    <p>Ansiedapp es sistema de prueba para la detección de sintomas depresivos, cuadros de ansiedad y demás afecciones derivadas del aislamiento.
                        Durante la pandemia, la población general ha recibido menos llamadas y se ha incrementado el sentimiento de apatía. El aislamiento ha generado soledad o angustia, y se han incrementado los trastornos alimenticios. «Los jóvenes no podían encontrarse con los amigos, conocer gente, ligar, enamorarse... Todo eso tiene unas consecuencias».
                    </p>
                    <p> La falta de intimidad y no poder separarse de la familia también han sido factores importantes. Se cree que «el no poder exteriorizar los problemas ha generado grandes angustias». Realizando nuestro test podrás comprobar si necesitas o no atención médica, y prevenir cuadros sintomáticos mayores provocados por el aislamiento.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;