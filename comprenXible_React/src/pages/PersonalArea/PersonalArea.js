import React, { useState } from "react";
import './personalArea.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from "axios";

function PersonalArea(props) {

    let sessionUserCredentials = sessionStorage.getItem("sessionUserCredentials");
    let convertUser = JSON.parse(sessionUserCredentials);

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

        let tests = convertUser.tests;

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
                                <th>Resultados</th>
                            </tr>
                            {
                                tests.map((test, index) => {
                                    let dateParse = new Date(test.date)
                                    let date = `${dateParse.getDate()}-${dateParse.getMonth() + 1}-${dateParse.getFullYear()}`
                                    return (

                                        <tr key={index}>
                                            <td>{date}</td>
                                            <td>{test.score}</td>
                                        </tr>
                                    )
                                })
                            }
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