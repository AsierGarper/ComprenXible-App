import React from "react";
// import {
//     Link
// } from "react-router-dom";
import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';

function Register() {
    return (<>
        <div className="SignIn">
            <Navbar />
            <div className="wrapper">
                <div className="textContainer">
                    <h4>Registro:</h4>
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
                        <input type="submit" class="button button--bgTransparent-white" value="Registrarse" />
                    </form>
                </div>
                <br></br>
            </div>
            <Footer />
        </div>
    </>)
}

export default Register;