import { createChatBotMessage } from "react-chatbot-kit";
import EndTest from "./EndTest";

const config = {
    botName: "Berta",
    initialMessages: [
      createChatBotMessage("Hola, ¡soy Berta!"),
      createChatBotMessage("A continuación te haré una serie de preguntas para evaluar tu estado."),
      createChatBotMessage("Para empezar, cuéntame, ¿qué tal estás?")],
    customStyles: {
        
        botMessageBox: {
          backgroundColor: "#616ec8",
        },
        chatButton: {
          backgroundColor: "#4d60c0",
        },
    },
    customComponents: {
      header: () => <div style={{ backgroundColor: '#4d60c0', padding: "5px", borderRadius: "3px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" }}>&nbsp;</div>,
      userAvatar: (props) => <div className="userIcon">M</div>
    },
    widgets: [
      {
        widgetName: "EndTest",
        widgetFunc: (props) => <EndTest {...props} />,
        props: {}
      }
    ],
}

export default config