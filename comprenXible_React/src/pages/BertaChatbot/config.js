import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Berta",
    initialMessages: [
      createChatBotMessage("Hola, ¡soy Berta!"),
      createChatBotMessage("Cuéntame, ¿qué tal estás?")],
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
    }
}

export default config