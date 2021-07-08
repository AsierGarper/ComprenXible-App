import React from "react";
// import {
//     Link
// } from "react-router-dom";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function PersonalArea() {
    return (<>
        <div className="PersonalArea">
            <Navbar />
            <div className="wrapper">
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
                    <input type="submit" class="button button--bgTransparent-white" value="Guardar cambios" />
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
                        <a href="/">Enviar Resultados</a>
                    </tr>
                    <tr>
                        <td>20/05/2021</td>
                        <td>3/15</td>
                        <td>No necesita atención médica.</td>
                        <a href="/">Enviar Resultados</a>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    </>)
}

export default PersonalArea;