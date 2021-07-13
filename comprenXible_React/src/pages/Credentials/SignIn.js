import React, { useEffect, useState } from 'react';
// import {
//     Link
// } from "react-router-dom";
import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import axios from 'axios';

function SignIn() {

    // user={Email: email.value, Password: password.value}
    // httpPost
    const [user, setUserData] = useState();

    useEffect(() => {
        console.log("Tu objeto que pasas por post es newUser, que es: ")
        console.log(user);
        axios.post('https://localhost:44350/api/authentication/', user)
            .then(function (response) {
                console.log("Esta es la respuesta al post:")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [user])

    // function checkCredentials(emailInput, passwordImput) {
    //     var regexEmail = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    //     var regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    //     var OKEmail = regexEmail.exec(emailInput.value);
    //     var OKPassword = regexPassword.exec(passwordImput.value);
    //     if (!OKPassword && !OKEmail) {
    //         console.error(emailInput.value + ' or ' + passwordImput.value + ' no son correctos');
    //     } else {
    //         checkUser();
    //         console.log('Email y contrasena correctos ' + OKPassword[0] + OKEmail[0]);
    //     }
    // }


    function checkUser() {
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;
        let tempUserObject = { userEmail: userEmail, userPassword: userPassword };
        console.log("Tu objeto temUserObject es: ")
        console.log(tempUserObject);
        setUserData(tempUserObject);
    }
    return (<>
        <div className="SignIn">
            <Navbar />
            <div className="wrapper wrapper-filled">
                <div className="textContainer">
                    <h4>Introduce tus datos:</h4>
                    <hr></hr>
                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="userEmail" name="userEmail" /><br></br>
                        <label htmlFor="userSex">Contraseña:</label><br></br>
                        <input type="password" id="userPassword" name="userPassword" /><br></br>
                    </form>
                    <button type="submit" className="button button--bgTransparent-white" onClick={() => checkUser()}>Iniciar Sesión</button>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default SignIn;