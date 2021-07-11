import React from "react";
// import {
//     Link
// } from "react-router-dom";
import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function SignIn() {

    // user={Email: email.value, Password: password.value}
    // httpPost

    return (<>
        <div className="SignIn">
            <Navbar />
            <div className="wrapper">
                <div className="textContainer">
                    <h4>Introduce tus datos:</h4>
                    <hr></hr>
                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="mail" id="email" name="userForm" /><br></br>
                        <label htmlFor="userSex">Contraseña:</label><br></br>
                        <input type="password" id="password" name="userForm" /><br></br>
                        <button type="submit" className="button button--bgTransparent-white">Iniciar Sesión</button>
                    </form>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default SignIn;