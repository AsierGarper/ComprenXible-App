import React, { useState } from 'react';

import './signIn.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer.js';
import ModalCredential from '../../components/modals/ModalCredential';
import axios from 'axios';

function SignIn(props) {

    const [user, setUserData] = useState();
    const [showModal, setShowModal] = useState(false);
    const [incorrectUser, setIncorrectUser] = useState(false);

    function checkUser() {
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;
        let tempUserObject = { useremail: userEmail, userpassword: userPassword };
        console.log("Tu objeto temUserObject es: ")
        console.log(tempUserObject);
        setUserData(tempUserObject);

        axios.post('https://localhost:44350/api/authentication/', tempUserObject)
            .then(function (response) {
                setShowModal(true);
                //Si esta bien metido, que nos meta el user a sessionstorage
                sessionStorage.setItem("sessionUserCredentials", JSON.stringify(response.data));
                props.setSessionUserCredentials(true);
            })
            .catch(function (error) {
                console.log(error);
                setIncorrectUser(true);
            })
    }
    function changeValue() {
        setIncorrectUser(false)
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
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="userEmail" name="userEmail" onChange={changeValue} /><br></br>
                        <label htmlFor="userSex">Contrase??a:</label><br></br>
                        <input type="password" id="userPassword" name="userPassword" onChange={changeValue} /><br></br>
                        {!incorrectUser ? "" : <p className="incorrectUser">Usuario incorrecto.</p>}
                        <button type="submit" className="button button--bgTransparent-white" onClick={checkUser}>Iniciar Sesi??n</button>
                    </form>
                </div>
                {showModal ? <ModalCredential text="Sesi??n iniciada correctamente. Dir??gete a la p??gina principal." url="/" urlText="Ir a Inicio" /> : <span></span>}
            </div>
            <Footer />
        </div>
    </>)
}

export default SignIn;