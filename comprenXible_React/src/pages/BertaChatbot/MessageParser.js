// import { throwStatement } from '@babel/types';
import axios from 'axios';
let chatbotResponses = [];

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = " " + message.toLowerCase() + " ";
        let wordsInMessage = lowerCaseMessage.split();

        // let answersScore = sessionStorage.getItem("answersScore");
        
        chatbotResponses = chatbotResponses.concat(lowerCaseMessage);
        
        let date = new Date();
        let endTime = date.getTime();
        let startTime = sessionStorage.getItem("startTime");
        let timeSpan = endTime-startTime;
        var timeSpanMinutes = timeSpan / 60000;

        let chatbotResponsesObj = {
            response: chatbotResponses,
            timeSpan: timeSpanMinutes.toString(),
            answersScore: "9"
            // user: 
        }
        console.log(chatbotResponsesObj)
        debugger
        axios.post("https://localhost:44350/api/chatbotResponses", chatbotResponsesObj)
            .then(function (response) {       
                debugger        
                if (response) {                 
                    this.actionProvider.endConversation()
                }
                else if (lowerCaseMessage.includes("y tu") ||
                    lowerCaseMessage.includes("y tú") ||
                    lowerCaseMessage.includes("que tal") ||
                    lowerCaseMessage.includes("qué tal") ||
                    lowerCaseMessage.includes("como estas") ||
                    lowerCaseMessage.includes("cómo estás") ||
                    lowerCaseMessage.includes("te encuentras")) {
                    this.actionProvider.responseToHowAreYou()
                }
                else if (lowerCaseMessage.includes("hola") ||
                    lowerCaseMessage.includes("aupa") ||
                    lowerCaseMessage.includes("aupi") ||
                    lowerCaseMessage.includes("buenas") ||
                    lowerCaseMessage.includes("buenas tardes") ||
                    lowerCaseMessage.includes("buenos días") ||
                    lowerCaseMessage.includes("buenos dias") ||
                    lowerCaseMessage.includes("buenas noches")) {
                    this.actionProvider.responseToGreeting()
                }
                else if (lowerCaseMessage === " si " ||
                    lowerCaseMessage === " sí ") {
                    this.actionProvider.responseToYes()
                }
                else if (lowerCaseMessage === " no ") {
                    this.actionProvider.responseToNo()
                }
                else if (lowerCaseMessage.includes("qué puedo hacer") ||
                    lowerCaseMessage.includes("que puedo hacer") ||
                    lowerCaseMessage.includes("me recomiendas") ||
                    lowerCaseMessage.includes("qué hago") ||
                    lowerCaseMessage.includes("que hago")) {
                    this.actionProvider.responseToRecommendation()
                }
                else if (lowerCaseMessage.includes("por lo que te cuento") ||
                    lowerCaseMessage.includes("ya te lo he") ||
                    lowerCaseMessage.includes("ya lo he") ||
                    lowerCaseMessage.includes("te lo he") ||
                    lowerCaseMessage.includes("pesada") ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("escuchas")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("enteras"))) {
                    this.actionProvider.responseToRepeated()
                }
                else if ((lowerCaseMessage.includes("no") && lowerCaseMessage.includes("de acuerdo")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("entiendes")) ||
                    (lowerCaseMessage.includes("no") && lowerCaseMessage.includes("he dicho"))) {
                    this.actionProvider.responseMisunderstanding()
                }
                else if ((lowerCaseMessage.includes("gilipollas") && !lowerCaseMessage.includes("eres") && !lowerCaseMessage.includes("soy") && !lowerCaseMessage.includes("me siento")) ||
                    (lowerCaseMessage.includes("imbecil") && !lowerCaseMessage.includes("eres") && !lowerCaseMessage.includes("soy") && !lowerCaseMessage.includes("me siento"))) {
                    this.actionProvider.responseToIrritated()
                }
                else if ((lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("tóxico")) ||
                    (lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("toxico")) ||
                    (lowerCaseMessage.includes("pensamiento") && lowerCaseMessage.includes("negativo")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("negativa")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("tóxica")) ||
                    (lowerCaseMessage.includes("persona") && lowerCaseMessage.includes("toxica"))) {
                    this.actionProvider.responseToNegativity()
                }
                else if (lowerCaseMessage.includes("solitari") ||
                    lowerCaseMessage.includes("soledad") ||
                    lowerCaseMessage.includes("abandono") ||
                    lowerCaseMessage.includes("abandonad")) {
                    this.actionProvider.responseToLoneliness()
                }
                else if (lowerCaseMessage.includes("triste") ||
                    lowerCaseMessage.includes("llorar") ||
                    lowerCaseMessage.includes("lloro") ||
                    lowerCaseMessage.includes("apenad") ||
                    lowerCaseMessage.includes("infeliz") ||
                    (lowerCaseMessage.includes("content") && !lowerCaseMessage.includes(" no ")) ||
                    (lowerCaseMessage.includes("alegr") && !lowerCaseMessage.includes(" no "))) {
                    this.actionProvider.responseToSadness()
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
                    this.actionProvider.responseToDepression()
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
                    this.actionProvider.responseToAnger()
                }
                else if (lowerCaseMessage.includes("cansa") ||
                    lowerCaseMessage.includes("derrotad") ||
                    lowerCaseMessage.includes("pena")) {
                    this.actionProvider.responseToTired()
                }
                else if (lowerCaseMessage.includes("morir") ||
                    lowerCaseMessage.includes("matarme") ||
                    lowerCaseMessage.includes("muerte") ||
                    lowerCaseMessage.includes("suicidio") ||
                    (lowerCaseMessage.includes("quitar") && lowerCaseMessage.includes("vida")) ||
                    (lowerCaseMessage.includes("cortar") && lowerCaseMessage.includes("venas")) ||
                    (lowerCaseMessage.includes("tirar") && lowerCaseMessage.includes("puente")) ||
                    lowerCaseMessage.includes("suicidar")) {
                    this.actionProvider.responseToSuicide()
                }
                else if (lowerCaseMessage.includes("insomnio") ||
                    lowerCaseMessage.includes("despierto") ||
                    lowerCaseMessage.includes("despierta") ||
                    lowerCaseMessage.includes("sueño") ||
                    (lowerCaseMessage.includes("dormir") && lowerCaseMessage.includes("no")) ||
                    (lowerCaseMessage.includes("duermo") && lowerCaseMessage.includes("no"))) {
                    this.actionProvider.responseToInsomnia()
                }
                else if ((lowerCaseMessage.includes("culpa") && !lowerCaseMessage.includes("disculpa")) ||
                    lowerCaseMessage.includes("responsable") ||
                    lowerCaseMessage.includes("falta") ||
                    lowerCaseMessage.includes("responsabilidad")) {
                    this.actionProvider.responseToGuilt()
                }
                else if (lowerCaseMessage.includes("solucion") ||
                    lowerCaseMessage.includes("solución") ||
                    lowerCaseMessage.includes("remedio") ||
                    lowerCaseMessage.includes("esperanza")) {
                    this.actionProvider.responseToHope()
                }
                else if (lowerCaseMessage.includes("droga") ||
                    lowerCaseMessage.includes("alcohol") ||
                    lowerCaseMessage.includes("cocaina") ||
                    lowerCaseMessage.includes("cocaína") ||
                    lowerCaseMessage.includes("porro") ||
                    lowerCaseMessage.includes("borrach")) {
                    this.actionProvider.responseToDrugs()
                }
                else if (lowerCaseMessage.includes("trabaj") ||
                    lowerCaseMessage.includes("contrata") ||
                    lowerCaseMessage.includes("curra") ||
                    lowerCaseMessage.includes("despedid") ||
                    lowerCaseMessage.includes("empresa") ||
                    lowerCaseMessage.includes("jefe") ||
                    lowerCaseMessage.includes("jefa") ||
                    lowerCaseMessage.includes("compañeros")) {
                    this.actionProvider.responseToWork()
                }
                else if (lowerCaseMessage.includes("familia") ||
                    lowerCaseMessage.includes("hijo") ||
                    lowerCaseMessage.includes("hija") ||
                    lowerCaseMessage.includes("mi marido") ||
                    lowerCaseMessage.includes("mi mujer") ||
                    lowerCaseMessage.includes("padre") ||
                    lowerCaseMessage.includes("madre")) {
                    this.actionProvider.responseToFamily()
                }
                else if (lowerCaseMessage.includes("estresad") ||
                    lowerCaseMessage.includes("agobiad") ||
                    lowerCaseMessage.includes("tension") ||
                    lowerCaseMessage.includes("tensión")) {
                    this.actionProvider.responseToStress()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("aburrid")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("desmotivad"))) {
                    this.actionProvider.responseToBored()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("frustrad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("amargad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("impotencia")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("rabia"))) {
                    this.actionProvider.responseToFrustration()
                }
                else if ((wordsInMessage.length < 6 && lowerCaseMessage.includes("decepcionad")) ||
                    (wordsInMessage.length < 6 && lowerCaseMessage.includes("desilusionad"))) {
                    this.actionProvider.responseToDisappointment()
                }
                else if (lowerCaseMessage === "fatal" ||
                    lowerCaseMessage === "estoy fatal") {
                    this.actionProvider.responseToVeryBad()
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
                    this.actionProvider.responseToAntonyms()
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
                    this.actionProvider.responseToBadFeelings()
                }
                else if (wordsInMessage.length > 15) {
                    this.actionProvider.responseToLongAnswer()
                }
                else if (lowerCaseMessage === (" ") ||
                    lowerCaseMessage === "asdfgh" ||
                    lowerCaseMessage === "qwerty" ||
                    lowerCaseMessage === "asdfvgb") {
                    this.actionProvider.responseToNoMessage()
                }
                else {
                    this.actionProvider.responseToNoKeywords()
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