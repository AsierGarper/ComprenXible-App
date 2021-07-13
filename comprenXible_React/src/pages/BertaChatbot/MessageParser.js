// import { throwStatement } from '@babel/types';
import axios from 'axios';
let chatbotResponses = [];

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;        
    }

    parse(message) {
        var self = this;
        const lowerCaseMessage = " " + message.toLowerCase() + " ";
        let wordsInMessage = lowerCaseMessage.split();

        let userAnswersString = sessionStorage.getItem("answersScore");
        let userEmail = sessionStorage.getItem("email");
        chatbotResponses = chatbotResponses.concat(lowerCaseMessage);
        
        let date = new Date();
        let endTime = date.getTime();
        let startTime = sessionStorage.getItem("startTime");
        let timeSpan = endTime-startTime;
        var timeSpanMinutes = timeSpan / 60000;

        let chatbotResponsesObj = {
            response: chatbotResponses,
            timeSpan: timeSpanMinutes.toString(),
            answers: userAnswersString,
            user: userEmail
        }
        
        axios.post("https://localhost:44350/api/chatbotResponses", chatbotResponsesObj)
            .then(function (response) { 
                console.log(this);
                if (response.data) {                 
                    self.actionProvider.endConversation()
                    document.querySelector(".react-chatbot-kit-chat-input").disabled = true;
                }
                else if (lowerCaseMessage.includes("y tu") ||
                    lowerCaseMessage.includes("y tú") ||
                    lowerCaseMessage.includes("que tal") ||
                    lowerCaseMessage.includes("qué tal") ||
                    lowerCaseMessage.includes("como estas") ||
                    lowerCaseMessage.includes("cómo estás") ||
                    lowerCaseMessage.includes("te encuentras")) {
                    self.actionProvider.responseToHowAreYou()
                }
                else if (lowerCaseMessage.includes("hola") ||
                    lowerCaseMessage.includes("aupa") ||
                    lowerCaseMessage.includes("aupi") ||
                    lowerCaseMessage.includes("buenas") ||
                    lowerCaseMessage.includes("buenas tardes") ||
                    lowerCaseMessage.includes("buenos días") ||
                    lowerCaseMessage.includes("buenos dias") ||
                    lowerCaseMessage.includes("buenas noches")) {
                    self.actionProvider.responseToGreeting()
                }
                else if (lowerCaseMessage === " si " ||
                    lowerCaseMessage === " sí ") {
                    self.actionProvider.responseToYes()
                }
                else if (lowerCaseMessage === " no ") {
                    self.actionProvider.responseToNo()
                }
                else if (lowerCaseMessage.includes("qué puedo hacer") ||
                    lowerCaseMessage.includes("que puedo hacer") ||
                    lowerCaseMessage.includes("me recomiendas") ||
                    lowerCaseMessage.includes("qué hago") ||
                    lowerCaseMessage.includes("que hago")) {
                    self.actionProvider.responseToRecommendation()
                }
                else if (lowerCaseMessage.includes("por lo que te cuento") ||
                    lowerCaseMessage.includes("ya te lo he") ||
                    lowerCaseMessage.includes("ya lo he") ||
                    lowerCaseMessage.includes("te lo he") ||
                    lowerCaseMessage.includes("pesada") ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("escuchas")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("enteras"))) {
                    self.actionProvider.responseToRepeated()
                }
                else if ((lowerCaseMessage.includes("no") && lowerCaseMessage.includes("de acuerdo")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("entiendes")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("he dicho"))) {
                    self.actionProvider.responseMisunderstanding()
                }
                else if ((lowerCaseMessage.includes("gilipollas") && !lowerCaseMessage.includes("eres") && !lowerCaseMessage.includes("soy") && !lowerCaseMessage.includes("me siento")) ||
                    (lowerCaseMessage.includes("imbecil") && !lowerCaseMessage.includes("eres") && !lowerCaseMessage.includes("soy") && !lowerCaseMessage.includes("me siento"))) {
                    self.actionProvider.responseToIrritated()
                }
                else if (lowerCaseMessage.includes("morir") ||
                    lowerCaseMessage.includes("matarme") ||
                    lowerCaseMessage.includes("muerte") ||
                    lowerCaseMessage.includes("suicidio") ||
                    (lowerCaseMessage.includes("quitar") && lowerCaseMessage.includes("vida")) ||
                    (lowerCaseMessage.includes("cortar") && lowerCaseMessage.includes("venas")) ||
                    (lowerCaseMessage.includes("tirar") && lowerCaseMessage.includes("puente")) ||
                    lowerCaseMessage.includes("suicidar")) {
                    self.actionProvider.responseToSuicide()
                }
                else if ((lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("tóxico")) ||
                    (lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("toxico")) ||
                    (lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("negativo")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("negativa")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("tóxica")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("toxica"))) {
                    self.actionProvider.responseToNegativity()
                }
                else if (lowerCaseMessage.includes("solitari") ||
                    lowerCaseMessage.includes("soledad") ||
                    lowerCaseMessage.includes("abandono") ||
                    lowerCaseMessage.includes("abandonad")) {
                    self.actionProvider.responseToLoneliness()
                }
                else if (lowerCaseMessage.includes("triste") ||
                    lowerCaseMessage.includes("llorar") ||
                    lowerCaseMessage.includes("lloro") ||
                    lowerCaseMessage.includes("apenad") ||
                    lowerCaseMessage.includes("infeliz") ||
                    (lowerCaseMessage.includes("content") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("alegr") && !lowerCaseMessage.includes(" no "))) {
                    self.actionProvider.responseToSadness()
                }
                else if (lowerCaseMessage.includes("miserable") ||
                    lowerCaseMessage.includes("despreciable") ||
                    lowerCaseMessage.includes("deprimid") ||
                    lowerCaseMessage.includes("depre") ||
                    lowerCaseMessage.includes("depres") ||
                    lowerCaseMessage.includes("enfermo") ||
                    lowerCaseMessage.includes("enferma") ||
                    lowerCaseMessage.includes("bajón") ||
                    lowerCaseMessage.includes("bajon") ||
                    lowerCaseMessage.includes("harto") ||
                    lowerCaseMessage.includes("harta") ||
                    lowerCaseMessage.includes("depresión") ||
                    lowerCaseMessage.includes("depresion")) {
                    self.actionProvider.responseToDepression()
                }
                else if (lowerCaseMessage.includes("enfadad") ||
                    lowerCaseMessage.includes("cabread") ||
                    lowerCaseMessage.includes("odio") ||
                    lowerCaseMessage.includes("cabreo") ||
                    lowerCaseMessage.includes("enfado") ||
                    lowerCaseMessage.includes("ira") ||
                    lowerCaseMessage.includes("enojad") ||
                    lowerCaseMessage.includes("irritad") ||
                    lowerCaseMessage.includes("furios") ||
                    lowerCaseMessage.includes("indignad")) {
                    self.actionProvider.responseToAnger()
                }
                else if (lowerCaseMessage.includes("cansa") ||
                    lowerCaseMessage.includes("derrotad") ||
                    lowerCaseMessage.includes("pena")) {
                    self.actionProvider.responseToTired()
                }                
                else if (lowerCaseMessage.includes("insomnio") ||
                    lowerCaseMessage.includes("despierto") ||
                    lowerCaseMessage.includes("despierta") ||
                    lowerCaseMessage.includes("sueño") ||
                    (lowerCaseMessage.includes("dormir") && lowerCaseMessage.includes("no")) ||
                    (lowerCaseMessage.includes("duermo") && lowerCaseMessage.includes("no"))) {
                    self.actionProvider.responseToInsomnia()
                }
                else if ((lowerCaseMessage.includes("culpa") && !lowerCaseMessage.includes("disculpa")) ||
                    lowerCaseMessage.includes("responsable") ||
                    lowerCaseMessage.includes("falta") ||
                    lowerCaseMessage.includes("responsabilidad")) {
                    self.actionProvider.responseToGuilt()
                }
                else if (lowerCaseMessage.includes("solucion") ||
                    lowerCaseMessage.includes("solución") ||
                    lowerCaseMessage.includes("remedio") ||
                    lowerCaseMessage.includes("esperanza")) {
                    self.actionProvider.responseToHope()
                }
                else if (lowerCaseMessage.includes("droga") ||
                    lowerCaseMessage.includes("alcohol") ||
                    lowerCaseMessage.includes("cocaina") ||
                    lowerCaseMessage.includes("cocaína") ||
                    lowerCaseMessage.includes("porro") ||
                    lowerCaseMessage.includes("borrach")) {
                    self.actionProvider.responseToDrugs()
                }
                else if (lowerCaseMessage.includes("trabaj") ||
                    lowerCaseMessage.includes("contrata") ||
                    lowerCaseMessage.includes("curra") ||
                    lowerCaseMessage.includes("despedid") ||
                    lowerCaseMessage.includes("empresa") ||
                    lowerCaseMessage.includes("jefe") ||
                    lowerCaseMessage.includes("jefa") ||
                    lowerCaseMessage.includes("compañeros")) {
                    self.actionProvider.responseToWork()
                }
                else if (lowerCaseMessage.includes("familia") ||
                    lowerCaseMessage.includes("hijo") ||
                    lowerCaseMessage.includes("hija") ||
                    lowerCaseMessage.includes("mi marido") ||
                    lowerCaseMessage.includes("mi mujer") ||
                    lowerCaseMessage.includes("padre") ||
                    lowerCaseMessage.includes("madre")) {
                    self.actionProvider.responseToFamily()
                }
                else if (lowerCaseMessage.includes("estresad") ||
                    lowerCaseMessage.includes("agobiad") ||
                    lowerCaseMessage.includes("tension") ||
                    lowerCaseMessage.includes("tensión")) {
                    self.actionProvider.responseToStress()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("aburrid")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("desmotivad"))) {
                    self.actionProvider.responseToBored()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("frustrad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("amargad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("impotencia")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("rabia"))) {
                    self.actionProvider.responseToFrustration()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("decepcionad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("desilusionad"))) {
                    self.actionProvider.responseToDisappointment()
                }
                else if (lowerCaseMessage === "fatal" ||
                    lowerCaseMessage === "estoy fatal") {
                    self.actionProvider.responseToVeryBad()
                }
                else if ((lowerCaseMessage.includes("feliz") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("felicidad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("de puta madre") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("content") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("a gusto") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("agusto") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ni tan mal") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("dias mejores") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("días mejores") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("optimista") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ánimo") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("animo") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("animad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("subidón") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("calmad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("regular") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("bueno") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("queja") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("vivo") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("viva") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("sobreviviendo") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("mejor") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("relajad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("fenomenal") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ilusionad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("satisfech") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("orgullos") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("entusiasmad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("eufóric") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("euforic") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("aliviad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("tranquil") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("valorad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("positivo") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("optimista") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("agradecid") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("encantad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("motivad") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("paz") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("placer") && !lowerCaseMessage.includes(" no "))) {
                    self.actionProvider.responseToAntonyms()
                }
                else if (lowerCaseMessage.includes("mal") ||
                    lowerCaseMessage.includes("no estoy bien") ||
                    lowerCaseMessage.includes("no me encuentro bien") ||
                    lowerCaseMessage.includes("mierda") ||
                    lowerCaseMessage.includes("fatal") ||
                    lowerCaseMessage.includes("jodid") ||
                    lowerCaseMessage.includes("insegur") ||
                    lowerCaseMessage.includes("melancólic") ||
                    lowerCaseMessage.includes("melancolic") ||
                    lowerCaseMessage.includes("confus") ||
                    lowerCaseMessage.includes("ansios") ||
                    lowerCaseMessage.includes("avergonzad") ||
                    lowerCaseMessage.includes("herid") ||
                    lowerCaseMessage.includes("indiferente") ||
                    lowerCaseMessage.includes("negativo") ||
                    lowerCaseMessage.includes("abrumad") ||
                    lowerCaseMessage.includes("humillad") ||
                    lowerCaseMessage.includes("preocupad") ||
                    lowerCaseMessage.includes("desconfiad") ||
                    lowerCaseMessage.includes("miedo") ||
                    lowerCaseMessage.includes("asco") ||
                    lowerCaseMessage.includes("abatid") ||
                    lowerCaseMessage.includes("angustiad") ||
                    lowerCaseMessage.includes("desamparad") ||
                    lowerCaseMessage.includes("desasosiego") ||
                    lowerCaseMessage.includes("desdicha") ||
                    lowerCaseMessage.includes("desesperad") ||
                    lowerCaseMessage.includes("desolad") ||
                    lowerCaseMessage.includes("disgusto") ||
                    lowerCaseMessage.includes("fastidiad") ||
                    lowerCaseMessage.includes("fracasad") ||
                    lowerCaseMessage.includes("inquieto") ||
                    lowerCaseMessage.includes("discutir") ||
                    lowerCaseMessage.includes("quejar") ||
                    lowerCaseMessage.includes("pesadumbre") ||
                    lowerCaseMessage.includes("rechazo") ||
                    lowerCaseMessage.includes("resignad") ||
                    lowerCaseMessage.includes("duro") ||
                    lowerCaseMessage.includes("dura") ||
                    lowerCaseMessage.includes("floj") ||
                    lowerCaseMessage.includes("gris") ||
                    (lowerCaseMessage.includes("feliz") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("felicidad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("de puta madre") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("content") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("a gusto") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("agusto") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("content") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ni tan mal") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("dias mejores") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("días mejores") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("optimista") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ánimo") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("animo") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("animad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("subidón") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("calmad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("regular") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("bueno") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("queja") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("vivo") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("viva") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("sobreviviendo") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("mejor") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("alegr") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("relajad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("fenomenal") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("ilusionad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("satisfech") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("orgullos") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("entusiasmad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("eufóric") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("euforic") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("aliviad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("tranquil") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("valorad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("positivo") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("optimista") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("agradecid") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("encantad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("motivad") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("paz") && lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("placer") && lowerCaseMessage.includes(" no "))) {
                    self.actionProvider.responseToBadFeelings()
                }
                else if (wordsInMessage.length > 15) {
                    self.actionProvider.responseToLongAnswer()
                }
                else if (lowerCaseMessage === (" ") ||
                    lowerCaseMessage === "asdfgh" ||
                    lowerCaseMessage === "qwerty" ||
                    lowerCaseMessage === "asdfvgb") {
                    self.actionProvider.responseToNoMessage()
                }
                else {
                    self.actionProvider.responseToNoKeywords()
                }
            })
            .catch(function(error){
                console.log(error);
            })
        
    }
}

export default MessageParser;

//extract strings from acquired post
//concat into maxi string
//indexOf(" ");
//