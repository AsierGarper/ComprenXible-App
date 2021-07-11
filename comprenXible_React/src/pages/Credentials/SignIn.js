// import React, { useEffect, useState } from 'react';
// import {
//     Link
// } from "react-router-dom";
import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
// import axios from 'axios';

function SignIn() {

    // user={Email: email.value, Password: password.value}
    // httpPost
    // const [user, setUserData] = useState();

    // useEffect(() => {
    //     console.log("Tu objeto que pasas por post es newUser, que es: ")
    //     console.log(user);
    //     axios.post('https://localhost:44350/api/users/', user)
    //         .then(function (response) {
    //             console.log("Esta es la respuesta al post:")
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }, [user])


    // function checkUser() {
    //     var userName = document.getElementById("userName").value;
    //     var userEmail = document.getElementById("userEmail").value;
    //     var userPassword = document.getElementById("userPassword").value;
    //     let tempUserObject = { Name: userName, Gender: userSex, Mail: userEmail, Password: userPassword };
    //     console.log("Tu objeto temUserObject es: ")
    //     console.log(tempUserObject);
    //     setUserData(tempUserObject);
    // }
    return (<>
        <div className="SignIn">
            <Navbar />
            <div className="wrapper">
                <div className="textContainer">
                    <h4>Introduce tus datos:</h4>
                    <hr></hr>
                    <form action="modifyUserData" className="userDataForm">
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="mail" id="email" name="userEmail" /><br></br>
                        <label htmlFor="userSex">Contraseña:</label><br></br>
                        <input type="password" id="password" name="userPassword" /><br></br>
                    </form>
                    <button className="button button--bgTransparent-white">Iniciar Sesión</button>
                    {/* <button className="button button--bgTransparent-white" onClick={() => checkUser()}>Iniciar Sesión</button> */}
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default SignIn;