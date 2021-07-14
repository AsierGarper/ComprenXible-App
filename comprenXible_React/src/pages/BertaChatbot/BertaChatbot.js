import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import './Chatbot.css';

function BertaChatbot() {
  let date = new Date();
  let startTime = date.getTime();
  sessionStorage.setItem("startTime", startTime);
  return (
    <header className="bertaContainer">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} placeholderText="Escribe un mensaje" />
    </header>
  );
}

export default BertaChatbot;