import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import './Home.css';
import ProfilePicture1 from '../images/mireia.png';
import ProfilePicture2 from '../images/asier.png';
import ProfilePicture3 from '../images/enrique.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function Home(props) {

    const [userLogged, setUserLogged] = useState(false);
    const [tryTest, setTryTest] = useState(false);
    const [route, setRoute] = useState("")
    const [error, setError] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("sessionUserCredentials")) {
            setRoute("/TestStart");

        }

    }, [])

    function tried() {

        if (sessionStorage.getItem("sessionUserCredentials") === null) {
            setTryTest(true);
        }
    }

    return (
        <div className="Home">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div class="tear">
                <div className="initTestContainer">
                    <Link onClick={tried} to={route} className="button button--bgTransparent-white" >COMENZAR TEST</Link>
                    {tryTest ? <p className="incorrectUser">Debes iniciar sesion para realizar el test.</p> : ""}
                </div>
            </div>
            <div className="wrapper wrapper-filled">
                <div className="textSection">
                    <h4>¿En que consiste?</h4>
                    <hr></hr>
                    <p>ComprenXible App es un sistema de detección de sintomas depresivos, cuadros de ansiedad y demás afecciones derivadas del aislamiento.
                        Durante la pandemia, la población general ha tenido menos contacto con sus amigos y conocidos y se ha incrementado el sentimiento de apatía. El aislamiento ha generado soledad y angustia, y se han incrementado los trastornos alimenticios.
                    </p>
                    <p> Nuestra aplicación hace uso de analítica predictiva para detectar posibles cuadros sintomáticos de ansiedad y depresión. Tras completar nuestro cuestionario y la conversación con nuestra especialista, los usuarios reciben al instante los resultados del análisis vía email. En caso de detectarse alguna patología, en dicho email se recomiendan los pasos a seguir y los centros de asistencia cercanos a los que acudir.</p>
                </div>
                <div className="textSection">
                    <h4>¿Quienes somos?</h4>
                    <hr></hr>
                    <p>Somos un equipo de desarrolladores web Fullstack, asentado en Bilbao (Vizcaya), con ganas de desarrollar todo tipo de aplicaciones con todo tipo de tecnologías. </p>
                    <p>ComprenXible es una pequeña demo, realizada en tiempo récord, de todo lo que podemos llegar a hacer.</p>
                    <div className="picturesContainer">
                        <div className="infoContainer">
                            <img src={ProfilePicture1} alt="" className="profilePicture"></img>
                            <p>Mireia Taboada Zapatero</p>
                            <p>Fullstack Developer | Bióloga</p>
                            <p>taboadamirella@gmail.com</p>
                        </div>
                        <div className="infoContainer">
                            <img src={ProfilePicture2} alt="" className="profilePicture"></img>
                            <p>Asier García Pérez</p>
                            <p>Fullstack Developer | Geólogo</p>
                            <p>asiergarper@gmail.com</p>
                        </div>
                        <div className="infoContainer">
                            <img src={ProfilePicture3} alt="" className="profilePicture"></img>
                            <p>Enrique Ortega Cabello</p>
                            <p>Fullstack Developer | Cineasta</p>
                            <p>ortega.cabello.7@gmail.com</p>
                        </div>
                    </div>
                    <div className="textSection">
                        <h4>Agradecimientos</h4>
                        <hr></hr>
                        <p>A todo el equipo de BBKBootcamp, por sus largas sesiones de aprendizaje conjuntas, a los profesores Peio Murguia y Erlantz Rojo y sus soluciones a los múltiples problemas de código, y a todos los alumnos que han formado parte del equipo, por su apoyo en los momentos de desesperación y objetivo mutuo de aprender conjuntamente y a contrarreloj, muchas gracias a todos.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;