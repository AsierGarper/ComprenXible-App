import React, { useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../Credentials/signIn.css';
import './ContactUs.css';
import ModalCredential from '../../components/modals/ModalCredential';
import axios from 'axios';

function ContactUs(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  function changeName(event) {
    setName(event.target.value)
  }
  function changeEmail(event) {
    debugger
    setEmail(event.target.value)
  }
  function changeMessage(event) {
    setMessage(event.target.value)
  }
  let emailBody = {};

  function sendEmail() {
    emailBody = {
      name: name,
      emailAddress: email,
      message: message
    }
    axios.post("https://localhost:44350/api/ContactEmails", emailBody)
      .then(function (response) {
        console.log(response);
        setShowModal(true);
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function resetForm() {
    var ele = document.getElementsByName("formArea");
    for (var i = 0; i < ele.length; i++)
      ele[i].value = "";
  }


  return (
    <>
      <div className="SignIn">
        <Navbar />
        <div className="wrapper wrapper-filled">
          <div className="textContainer">
            <h4>Contacto:</h4>
            <hr></hr>
            <form className="contactForm" action="sendEmail" onSubmit={(e) => e.preventDefault()}>
              <div >
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="formArea" required value={name} onChange={event => changeName(event)} />
              </div>
              <p></p>
              <div >
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="formArea" required value={email} onChange={event => changeEmail(event)} />
              </div>
              <p></p>
              <div >
                <label htmlFor="message">Mensaje:</label>
                <p></p>
                <textarea id="message" name="formArea" required value={message} onChange={event => changeMessage(event)} />
              </div>
              <button type="submit" className="button button--bgTransparent-white" onClick={sendEmail}>Enviar</button>
            </form>
          </div>
          {showModal ? <ModalCredential text="Mensaje enviado correctamente." url="/" urlText="Ir a Inicio" /> : <span></span>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;