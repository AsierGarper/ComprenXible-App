import React, { useEffect, useState } from 'react';
// import {
//     Link
// } from "react-router-dom";
import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from 'axios';

function Register() {
    const [newUser, setUserData] = useState();
    useEffect(() => {
        console.log("Tu objeto que pasas por post es newUser, que es: ")
        console.log(newUser);
        axios.post('https://localhost:44350/api/users/', newUser)
            .then(function (response) {
                console.log("Esta es la respuesta al post:")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [newUser])

    function getCheckedSex() {
        var ele = document.getElementsByName('userSex');
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    function checkCredentials(emailInput, passwordImput) {
        var regexEmail = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var OKEmail = regexEmail.exec(emailInput.value);
        var OKPassword = regexPassword.exec(passwordImput.value);
        if (OKPassword && OKEmail) {
            sessionStorage.setItem("email", OKEmail)
            createUserObject();
        }
    }
    function createUserObject() {
        var userName = document.getElementById("userName").value;
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;
        var userSex = getCheckedSex();
        let tempUserObject = { Name: userName, Gender: userSex, Email: userEmail, Password: userPassword };
        console.log("Tu objeto temUserObject es: ")
        console.log(tempUserObject);
        setUserData(tempUserObject);
    }
    return (<>
        <div className="SignIn">
            <Navbar />
            <div className="wrapper wrapper-filled">
                <div className="textContainer">
                    <h4>Registro:</h4>
                    <hr></hr>
                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userName">Nombre:</label><br></br>
                        <input type="text" id="userName" name="userName" /><br></br>
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="userEmail" name="userEmail" /><br></br>
                        <label htmlFor="userEmail">Password:</label><br></br>
                        <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 6 o más caracteres" id="userPassword" name="userPassword" /><br></br>
                        <label htmlFor="userSex">Sexo:</label><br></br>
                        <input type="radio" className="userSex" name="userSex" value="man" />
                        <label htmlFor="H">Hombre</label><br></br>
                        <input type="radio" className="userSex" name="userSex" value="woman" />
                        <label htmlFor="M">Mujer</label><br></br>
                        <input type="radio" className="userSex" name="userSex" value="other" checked="checked" />
                        <label htmlFor="O">Otro</label><br></br>
                        <button type="submit" className="button button--bgTransparent-white" onClick={() => checkCredentials(document.getElementById('userEmail'), document.getElementById('userPassword'))} >Registrarse</button>
                    </form>
                </div>
                <br></br>
            </div>
            <Footer />
        </div>
    </>)
}

export default Register;