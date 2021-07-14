import React, { useState } from "react";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Questionnaire from "./components/questionnaire/Questionnaire";
import TestStart from "./components/testStart/TestStart";
import TestResult from "./components/testResult/TestResult";
import PersonalArea from "./pages/PersonalArea/PersonalArea";
import SingIn from "./pages/Credentials/SignIn";
import Register from "./pages/Credentials/Register";
import BertaChatbot from "./pages/BertaChatbot/BertaChatbot";


function App() {
  const [sessionUserCredentials, setSessionUserCredentials] = useState(sessionStorage.getItem("sessionUserCredentials"));

  return (
    < Router >
      <div className="App">
        <Switch>
          <Route path="/TestStart">
            <TestStart />
          </Route>
          <Route path="/InitTest">
            <Questionnaire />
          </Route>
          <Route path="/Chatbot">
            <BertaChatbot />
          </Route>
          <Route path="/TestResult">
            <TestResult />
          </Route>
          <Route path="/SignIn">
            <SingIn sessionUserCredentials={sessionUserCredentials} setSessionUserCredentials={setSessionUserCredentials} />
          </Route>
          <Route path="/Register">
            <Register sessionUserCredentials={sessionUserCredentials} setSessionUserCredentials={setSessionUserCredentials} />
          </Route>
          <Route path="/PersonalArea">
            <PersonalArea sessionUserCredentials={sessionUserCredentials} setSessionUserCredentials={setSessionUserCredentials} />
          </Route>
          <Route path="/">
            <Home sessionUserCredentials={sessionUserCredentials} setSessionUserCredentials={setSessionUserCredentials} />
          </Route>
        </Switch>
      </div>
    </Router >

  );
}

export default App;
