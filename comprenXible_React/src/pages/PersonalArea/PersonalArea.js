import React, { useState, useEffect } from "react";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from "axios";

function PersonalArea(props) {

    let tempUserObject = JSON.parse(sessionStorage.getItem("sessionUserCredentials"));
    let tempAuthenticationUser = { userEmail: tempUserObject.email, userPassword: tempUserObject.password }
    console.log("Esto te da el authenticationUser");
    console.log(tempAuthenticationUser);
    let authenticationUser = tempAuthenticationUser;
    const [funciona, setFunciona] = useState(false)

    useEffect(() => {
        axios.post('https://localhost:44350/api/authentication/', authenticationUser)
            .then(function (response) {
                sessionStorage.setItem("sessionUserCredentials", JSON.stringify(response.data));
                setFunciona(true)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [authenticationUser])

    let sessionUserCredentials = sessionStorage.getItem("sessionUserCredentials");
    sessionUserCredentials = JSON.parse(sessionUserCredentials);
    var tests = sessionUserCredentials.tests;

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
        {funciona ?

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
                                <th>Resultados</th>
                            </tr>

                            {(sessionUserCredentials.tests).length !== 0 && sessionUserCredentials != null ?
                                tests.map((test, index) => {
                                    let dateParse = new Date(test.date)
                                    let date = `${dateParse.getDate()}-${dateParse.getMonth() + 1}-${dateParse.getFullYear()}`
                                    return (

                                        <tr key={index}>
                                            <td>{date}</td>
                                            {test.score < 5 ? <td>No se muestran rasgos depresivos.</td> : <></>}
                                            {test.score >= 5 && test.score <= 10 ? <td>Síntomas leves.</td> : <></>}
                                            {test.score > 10 && test.score <= 15 ? <td>Síntomas severos, debe acudir a especialista.</td> : <></>}
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td>-</td>
                                    <td>No existen resultados.</td>
                                </tr>
                            }
                        </table>
                    </div>

                </div>
                <Footer />
            </div>
            :
            ""}
    </>)
}

export default PersonalArea;

