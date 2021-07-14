import React, { useEffect, useState } from 'react';

import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import ModalCredential from '../../components/modals/ModalCredential';
import axios from 'axios';

function SignIn(props) {

    const [user, setUserData] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("Tu objeto que pasas por post es newUser, que es: ")
        console.log(user);
        axios.post('https://localhost:44350/api/authentication/', user)
            .then(function (response) {
                setShowModal(true);
                //Si esta bien metido, que nos meta el user a sessionstorage
                sessionStorage.setItem("sessionUserCredentials", JSON.stringify(response.data));
                props.setSessionUserCredentials(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [user])


    function checkUser() {
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;
        let tempUserObject = { useremail: userEmail, userpassword: userPassword };
        console.log("Tu objeto temUserObject es: ")
        console.log(tempUserObject);
        setUserData(tempUserObject);
    }
    return (<>
        <div className="SignIn">
            <Navbar sessionUserCredentials={props.sessionUserCredentials} setSessionUserCredentials={props.setSessionUserCredentials} />
            <div className="wrapper wrapper-filled">
                <div className="textContainer">
                    <h4>Introduce tus datos:</h4>
                    <hr></hr>
                    <form action="modifyUserData" className="userDataForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="userEmail">Email:</label><br></br>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="userEmail" name="userEmail" /><br></br>
                        <label htmlFor="userSex">Contraseña:</label><br></br>
                        <input type="password" id="userPassword" name="userPassword" /><br></br>
                        <button type="submit" className="button button--bgTransparent-white" onClick={() => checkUser()}>Iniciar Sesión</button>
                    </form>
                    {showModal ? <ModalCredential text="Sesión iniciada correctamente. Serás redirigido a la página principal." url="/SignIn" urlText="Iniciar sesión" /> : <span></span>}
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default SignIn;