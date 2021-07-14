import React, { useState } from "react";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from "axios";

function PersonalArea(props) {

    let sessionUserCredentials = JSON.parse(sessionStorage.getItem("sessionUserCredentials"));
    console.log(sessionUserCredentials.name);
    console.log(sessionUserCredentials.email);

    const [name, setName] = useState(sessionUserCredentials.name)
    const [email, setEmail] = useState(sessionUserCredentials.email)

    function changeName(event) {
        setName(event.target.value);
    }

    function changeEmail(event) {
        setEmail(event.target.value);
    }


    function saveChanges() {
        let changedUser = { "name": name, "email": sessionUserCredentials.email, "newEmail": email, "password": sessionUserCredentials.password };
        console.log("Esto es tu changedUser:")
        console.log(changedUser);
        axios.put('https://localhost:44350/api/users/', changedUser)
            .then(function (response) {
                console.log(response);
                let newSessionUserCredentials = { "name": { name }, "gender": sessionUserCredentials.gender, "email": { email }, "newEmail": null, "password": sessionUserCredentials.password, "tests": sessionUserCredentials.tests };
                sessionStorage.setItem("sessionUserCredentials", JSON.stringify(newSessionUserCredentials));
            })
            .catch(function (error) {
                console.log(error);
            })

    }



    return (<>
        <div className="PersonalArea">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
                <div className="textContainer">
                    <h4>Modifica tus datos:</h4>
                    <hr></hr>

                    <form action="modifyUserData" className="userDataForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="userName">Nombre:</label><br></br>
                        <input type="text" id="userName" name="userForm" value={name} onChange={event => changeName(event)} /><br></br>
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="mail" id="userEmail" name="userForm" value={email} onChange={event => changeEmail(event)} /><br></br>
                        <button type="submit" className="button button--bgTransparent-white" onClick={saveChanges}>Guardar cambios</button>
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