import React from "react";

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


function App() {

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
          <Route path="/TestResult">
            <TestResult />
          </Route>
          <Route path="/SignIn">
            <SingIn />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/PersonalArea">
            <PersonalArea />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >

  );
}

export default App;
