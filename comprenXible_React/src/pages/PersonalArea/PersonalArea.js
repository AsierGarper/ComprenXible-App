import React from "react";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function PersonalArea(props) {

    return (<>
        <div className="PersonalArea">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
                <div className="textContainer">
                    <h4>Modifica tus datos:</h4>
                    <hr></hr>

                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userName">Nombre:</label><br></br>
                        <input type="text" id="optionA" name="userForm" /><br></br>
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="mail" id="optionB" name="userForm" /><br></br>
                        <label htmlFor="userSex">Sexo:</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="H">Hombre</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="M">Mujer</label><br></br>
                        <input type="radio" id="userSex" name="userForm" />
                        <label htmlFor="O">Otro</label><br></br>
                        <button type="submit" className="button button--bgTransparent-white">Guardar cambios</button>
                    </form>

                    <br></br>
                    <h4>Análisis realizados:</h4>
                    <hr></hr>
                    <table id="testRecords">
                        <tr>
                            <th>Fecha</th>
                            <th>Indicadores</th>
                            <th>Conclusión</th>
                            <th>Resultados</th>
                        </tr>
                        <tr>
                            <td>20/04/2020</td>
                            <td>12/15</td>
                            <td>Necesita atención médica.</td>
                            <button className="button button--bgTransparent-white">Enviar resultados</button>
                        </tr>
                        <tr>
                            <td>20/05/2021</td>
                            <td>3/15</td>
                            <td>No necesita atención médica.</td>
                            <button className="button button--bgTransparent-white">Enviar resultados</button>
                        </tr>
                    </table>
                    {/* <iframe title="map"
                        width="600"
                        height="450"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD9ecVzHiRU3frlwA9-R-q40p5GlVEXilU&q=current+location">
                    </iframe> */}
                </div>

            </div>
            <Footer />
        </div>
    </>)
}

export default PersonalArea;