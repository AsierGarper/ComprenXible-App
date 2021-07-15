import React, { useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../Credentials/signIn.css';
import './ContactUs.css';
import axios from 'axios';

function ContactUs(props) {

  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    debugger;
    axios.post("https://localhost:44350/api/ContactEmails", emailBody)
      .then(function (response) {
      })
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
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required value={name} onChange={event => changeName(event)} />
              </div>
              <p></p>
              <div >
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required value={email} onChange={event => changeEmail(event)} />
              </div>
              <p></p>
              <div >
                <label htmlFor="message">Message:</label>
                <p></p>
                <textarea id="message" required value={message} onChange={event => changeMessage(event)} />
              </div>
              <button type="submit" onClick={sendEmail}>{status}</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;