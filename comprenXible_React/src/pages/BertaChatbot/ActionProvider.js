

let responsesToHowAreYou = [
    "Estoy bien, gracias. Pero cuéntame más sobre que tal estás tú.",
    "Yo bien, gracias. Pero cuéntame más sobre ti, ¿cómo te encuentras?",
    "Bien, gracias por preguntar. Pero cuéntame más sobre cómo estás tú."]

let responsesToGreeting = [
    "Hola, cuéntame, ¿cómo estás?",
    "Buenas, ¿qué tal estás?",
    "Hola, ¿cómo te encuentras?",
    "Buenas, cuéntame cómo te sientes."];

let responsesToYes = [
    "Vale, dime.",
    "Dime, te leo.",
    "Vale, cuéntame."];

let responsesToNo = [
    "Comprendo que es difícil hablar de cómo te sientes, pero necesito más información para evaluarte.",
    "Perdona, sé que es complicado hablar de esto, pero necesito más información para hacer una evaluación de tu estado de ánimo."];

let responsesToRecommendation = [
    "Desafortunadamente no estoy capacitada para darte recomendaciones, lo siento. Cuéntame más sobre cómo te encuentras.",
    "Siento no poder darte recomendaciones, no estoy capacitada. Por favor, cuéntame más sobre qué tal estás."];

let responsesToRepeated = [
    "Perdona por hacerte tantas preguntas sobre tus sentimientos pero para poder evaluarte necesito más información sobre cómo te sientes.",
    "Perdona por hacerte tantas preguntas, sé que no es fácil hablar de esto pero necesito más información para evaluar tu estado de ánimo."];

let responsesToMisunderstanding = [
    "Perdona si te he malinterpretado. ¿Podrías repetírmelo a poder ser con más detalle?",
    "Lo siento si no te he entendido. Por favor, ¿puedes ser más preciso?",
    "Perdona te he malinterpretado. Por favor, ¿puedes explicármelo con más detalle?"];

let responsesToIrritated = [
    "Veo que hay alguien que te molesta. Cuéntame, ¿cómo afecta esa persona a tu estado de ánimo?",
    "Parece que hay alguien que te irrita. ¿Podrías contarme más sobre cómo te hace sentir?"];

let responsesToNegativity = [
    "Has mencionado negatividad. Cuéntame, ¿cómo afecta eso a tu vida?",
    "Has dicho tóxico o negativo. Cuéntame más sobre eso."];

let responsesToLoneliness = [
    "¿Cómo te hace sentir estar en soledad?",
    "Y, ¿qué te hace sentir la soledad?",
    "¿Cómo te afecta la soledad?",
    "Comprendo. Y, ¿cuándo estás en soledad?"];

let responsesToSadness = [
    "A parte de triste, ¿qué otros estados de ánimo aparecen a lo largo de tu día?",
    "¿Cómo te afecta estar triste?",
    "Y, ¿por qué te sientes triste?",
    "Comprendo. Y, ¿cuándo te sueles sentir triste?"];

let responsesToDepression = [
    "Comprendo que te sientes muy mal. ¿Qué hace que te sientas así?",
    "Y, ¿cuándo sientes depresión?",
    "Vale. Y, ¿cómo te afecta este sentimiento de depresión en el día a día?",
    "¿Qué hace que mejore tu sensación de depresión?"];

let responsesToAnger = [
    "A parte de enfado, ¿qué otros estados de ánimo aparecen a lo largo de tu día?",
    "Parece que sientes rabia o enfado, ¿qué hace que te sientas así?",
    "Comprendo. ¿Cuándo sueles sentir frustración o irritación?",
    "Vale. Y, ¿cómo te influye el enfado?"];

let responsesToTired = [
    "Comprendo que sientes cansancio. ¿Qué más sientes?",
    "Parece que sientes cansancio. ¿Cómo afecta eso a tu estado de ánimo?",
    "Y, ¿cuándo estás cansado?"];

let responsesToSuicide = [
    "Tiene que ser duro sentirte así. ¿Hay algo que mejore esa sensación?",
    "Siento que te encuentres en un momento tan bajo. Estoy contigo. ¿Qué hace que te sientas así?",
    "Comprendo que tu situación es grave, lo siento. Dime, ¿cómo te influye esto en tu día a día?"];

let responsesToInsomnia = [
    "Me parece que has mencionado que te cuesta dormir. ¿Sabrías describir por qué?",
    "Y, ¿hay algo que mejore tu insomnio?",
    "¿Cuándo te cuesta dormir?"];

let responsesToGuilt = [
    "Comprendo que quizá te sientes culpable. ¿Puedes contarme más sobre eso?",
    "Parece que te sientes responsable, cuéntame más sobre eso."];

let responsesToHope = [
    "Describe con más detalle qué piensas sobre el futuro.",
    "Cuéntame, ¿cómo ves el futuro?",
    "Y, ¿qué opinas del futuro?"]

let responsesToDrugs = [
    "Has mencionado alcohol o drogas. Cuéntame más sobre cómo repercute en tu estado de ánimo.",
    "En cuento a la droga que has mencionado, ¿me podrías contar cómo afecta a tu vida?"];

let responsesToWork = [
    "Hablando de trabajo, ¿cómo te sientes en cuanto a tu situación laboral?",
    "En cuanto a tu situación laboral, ¿me puedes hablar más sobre cómo te encuentras en ese ámbito?"];

let responsesToFamily = [
    "Hablando de tu familia, ¿cómo describirías tu estado de ánimo cuando estás con ella?",
    "Ya que mencionas a tu familia, ¿qué sientes sobre ese ámbito de tu vida?"];

let responsesToStress = [
    "Has mencionado estrés. ¿Cómo hace que te sientas?",
    "Parece que tienes estrés. ¿Cómo afecta eso a tu estado de ánimo?"];

let responsesToAntonyms = [
    "Ya veo. ¿Hay algún aspecto negativo de tu estado de ánimo que quieras mencionar?",
    "Vale, ¿hay algo más que me quieras contar sobre cómo te sientes?",
    "Comprendo, ¿hay algo negativo que quieras contarme?"];

let responsesToBadFeelings = [
    "Ya veo. ¿Hay algún otro sentimiento negativo que tengas a lo largo del día?",
    "Y, ¿podrías contarme en más detalle por qué te sientes así?",
    "Comprendo. Y, ¿cuándo te sueles sentir así?",
    "¿Cómo te influye eso en el día a día?",
    "Vale, cuéntame, ¿hay algo que mejore o empeore esa sensación?",
    "Y, ¿cómo cambia tu ánimo a lo largo del día?"];

let responsesToLongAnswer = [
    "Veo que te estás tomando tu tiempo para contarme en detalle, ¡gracias!. Sin embargo, necesito más información en cuanto a tus sentimientos y estados de ánimo.",
    "Gracias por contarme con tanto detalle, pero necesito que te centres más en tus sentimientos y estados de ánimo para poder evaluarte.",
    "Gracias por dedicarle tiempo a responder, pero ¿podrías hablar más concretamente de tus sentimientos y estados de ánimo?"];

let responsesToNoKeywords = [
    "Comprendo, pero ¿me podrías contar un poco más en detalle?",
    "Vale. Ahora, por favor, describe con 5 adjetivos cómo te sientes.",
    "Vale, cuéntame más sobre eso.",
    "¿Hay algún otro adjetivo con el que describirías tu estado de ánimo o estado emocional?",
    "Ya veo, sigue contándome cómo te sientes en ese sentido.",
    "Vale, Comprendo. Ahora, cuéntame sobre cómo te sientes a lo largo del día.",
    "Cuéntame más, te leo.",
    "Vale, Comprendo. Otra cosa. Y, cuando estás con tus amistades, ¿cómo te encuentras?",
    "¿Me podrías hablar más detalladamente sobre esto?",
    "Vale. Y, ¿qué tal te encuentras cuando estás con tu familia?",
    "Me gustaría saber más qué piensas sobre este tema.",
    "Comprendo... Otra pregunta, cuando estás en silencio ¿en qué piensas?",
    "¿Te importaría ser más detallado?",
    "Vale, cambiando de tema. ¿Cómo te sientes en tu trabajo?",
    "Cuéntame más, a poder ser con más detalle.",
    "Ya veo. Otra cosa... ¿Qué es lo más positivo y negativo que has llegado a pensar en tu día a día?",
    "¿Podías elaborar más sobre tu estado de ánimo en ese sentido?"];

function selectRandomResponse(responses) {
    let random = Math.floor(Math.random() * responses.length);
    let response = responses[random];
    let index = responses.indexOf(response);
    responses.splice(index, 1);
    return response;
}

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
    responseToHowAreYou(){
        if (responsesToHowAreYou.length === 0) {
            responsesToHowAreYou = ["Todo bien por aquí. Y ¿tú qué tal?"];
        }
        let responseToHowAreYou = selectRandomResponse(responsesToHowAreYou);
        const responseToHowAreYouMessage = this.createChatBotMessage(responseToHowAreYou)
        this.updateChatbotState(responseToHowAreYouMessage)
    }
    responseToGreeting() {
        if (responsesToGreeting.length === 0) {
            responsesToGreeting = ["Hola, ¿qué tal estás?"];
        }
        let responseToGreeting = selectRandomResponse(responsesToGreeting);
        const greetingMessage = this.createChatBotMessage(responseToGreeting)
        this.updateChatbotState(greetingMessage)
    }
    responseToYes() {
        if (responsesToYes.length === 0) {
            responsesToYes = ["Dime."];
        }
        let responseToYes = selectRandomResponse(responsesToYes);
        const yesMessage = this.createChatBotMessage(responseToYes)
        this.updateChatbotState(yesMessage)
    }
    responseToNo(){
        if (responsesToNo.length === 0) {
            responsesToNo = ["Comprendo que no es fácil hablar de sentimientos, pero necesito algo más de información."];
        }
        let responseToNo = selectRandomResponse(responsesToNo);
        const noMessage = this.createChatBotMessage(responseToNo)
        this.updateChatbotState(noMessage)
    }   
    responseToRecommendation(){
        if (responsesToRecommendation.length === 0) {
            responsesToRecommendation = ["Perdona pero no puedo darte recomendaciones. ¿Podrías seguir contándome sobre tu estado de ánimo?"];
        }
        let responseToRecommendation = selectRandomResponse(responsesToRecommendation);
        const responseToRecommendationMessage = this.createChatBotMessage(responseToRecommendation)
        this.updateChatbotState(responseToRecommendationMessage)
    }
    responseToRepeated(){
        if (responsesToRepeated.length === 0) {
            responsesToRepeated = ["Perdona si te pregunto por demasiados detalles, pero necesito más información para evaluar tu situación." ];
        }
        let responseToRepeated = selectRandomResponse(responsesToRepeated);
        const responseToRepeatedMessage = this.createChatBotMessage(responseToRepeated)
        this.updateChatbotState(responseToRepeatedMessage)
    }
    responseToMisunderstanding(){
        if (responsesToMisunderstanding.length === 0) {
            responsesToMisunderstanding = ["Perdona si te pregunto por demasiados detalles, pero necesito más información para evaluar tu situación." ];
        }
        let responseToMisunderstanding = selectRandomResponse(responsesToMisunderstanding);
        const responseToMisunderstandingMessage = this.createChatBotMessage(responseToMisunderstanding)
        this.updateChatbotState(responseToMisunderstandingMessage)
    }
    responseToIrritated(){
        if (responsesToIrritated.length === 0) {
            responsesToIrritated = ["Me parece que hay alguien que te está molestando. Cuéntame más sobre eso." ];
        }
        let responseToIrritated = selectRandomResponse(responsesToIrritated);
        const responseToIrritatedMessage = this.createChatBotMessage(responseToIrritated)
        this.updateChatbotState(responseToIrritatedMessage)
    }
    responseToNegativity(){
        if (responsesToNegativity.length === 0) {
            responsesToNegativity = ["Comprendo que algo en tu vida es negativo. Cuéntame más sobre eso." ];
        }
        let responseToNegativity = selectRandomResponse(responsesToNegativity);
        const responseToNegativityMessage = this.createChatBotMessage(responseToNegativity)
        this.updateChatbotState(responseToNegativityMessage)
    }
    responseToLoneliness() {
        if (responsesToLoneliness.length === 0) {
            responsesToLoneliness = ["Describe con más detalle cómo te afecta sentirte en soledad."];
        }        
        let responseToLoneliness = selectRandomResponse(responsesToLoneliness);
        const responseToLonelinessMessage = this.createChatBotMessage(responseToLoneliness)
        this.updateChatbotState(responseToLonelinessMessage)
    }
    responseToSadness() {
        if (responsesToSadness.length === 0) {
            responsesToSadness = ["Describe con más detalle como te afecta sentirte triste."];
        }
        let responseToSadness = selectRandomResponse(responsesToSadness);
        const ToSadnessMessage = this.createChatBotMessage(responseToSadness)
        this.updateChatbotState(ToSadnessMessage)
    }
    responseToDepression() {
        if (responsesToDepression.length === 0) {
            responsesToDepression = ["Describe con más detalle como te afecta tener un estado de ánimo tan bajo."];
        }
        let responseToDepression = selectRandomResponse(responsesToDepression);
        const ToDepressionMessage = this.createChatBotMessage(responseToDepression)
        this.updateChatbotState(ToDepressionMessage)
    }
    responseToAnger() {
        if (responsesToAnger.length === 0) {
            responsesToAnger = ["Describe con más detalle cómo te afecta el enfado."];
        }
        let responseToAnger = selectRandomResponse(responsesToAnger);
        const ToAngerMessage = this.createChatBotMessage(responseToAnger)
        this.updateChatbotState(ToAngerMessage)
    }
    responseToTired(){
        if (responsesToTired.length === 0) {
            responsesToTired = ["¿Cómo te hace sentir el cansancio?"];
        }
        let responseToTired = selectRandomResponse(responsesToTired);
        const ToTiredMessage = this.createChatBotMessage(responseToTired)
        this.updateChatbotState(ToTiredMessage)
    }
    responseToSuicide() {
        if (responsesToSuicide.length === 0) {
            responsesToSuicide = ["Siento ver que te encuentras tan mal. ¿Quieres hablar de qué te lleva a estar así?."];
        }
        let responseToSuicide = selectRandomResponse(responsesToSuicide);
        const ToSuicideMessage = this.createChatBotMessage(responseToSuicide)
        this.updateChatbotState(ToSuicideMessage)
    }
    responseToInsomnia() {
        if (responsesToInsomnia.length === 0) {
            responsesToInsomnia = ["Describe con más detalle como te afecta dormir mal."];
        }
        let responseToInsomnia = selectRandomResponse(responsesToInsomnia);
        const ToInsomniaMessage = this.createChatBotMessage(responseToInsomnia)
        this.updateChatbotState(ToInsomniaMessage)
    }
    responseToGuilt(){
        if (responsesToGuilt.length === 0) {
            responsesToGuilt = ["Comprendo que tu sientes algo de culpa. ¿Podrías contarme con más detalle?"];
        }
        let responseToGuilt = selectRandomResponse(responsesToGuilt);
        const ToGuiltMessage = this.createChatBotMessage(responseToGuilt)
        this.updateChatbotState(ToGuiltMessage)
    }
    responseToHope(){
        if (responsesToHope.length === 0) {
            responsesToHope = ["¿Podrías contarme con más detalle qué piensas sobre el futuro?"];
        }
        let responseToHope = selectRandomResponse(responsesToHope);
        const ToHopeMessage = this.createChatBotMessage(responseToHope)
        this.updateChatbotState(ToHopeMessage)
    }
    responseToDrugs(){
        if (responsesToDrugs.length === 0) {
            responsesToDrugs = ["¿Podrías contarme con más detalle lo que has mencionado sobre drogas y/o alcohol?"];
        }
        let responseToDrugs = selectRandomResponse(responsesToDrugs);
        const ToDrugsMessage = this.createChatBotMessage(responseToDrugs)
        this.updateChatbotState(ToDrugsMessage)
    }
    responseToWork(){
        if (responsesToWork.length === 0) {
            responsesToWork = ["Me parece que has mencionado tu trabajo. Cuéntame más sobre eso."];
        }
        let responseToWork = selectRandomResponse(responsesToWork);
        const ToWorkMessage = this.createChatBotMessage(responseToWork)
        this.updateChatbotState(ToWorkMessage)
    }
    responseToFamily(){
        if (responsesToFamily.length === 0) {
            responsesToFamily = ["Me parece que has mencionado a tu familia. Cuéntame más sobre eso."];
        }
        let responseToFamily = selectRandomResponse(responsesToFamily);
        const ToFamilyMessage = this.createChatBotMessage(responseToFamily)
        this.updateChatbotState(ToFamilyMessage)
    }
    responseToStress(){
        if (responsesToStress.length === 0) {
            responsesToStress = ["Me parece que has mencionado estrés. Cuéntame más sobre cómo te hace sentir el estrés."];
        }
        let responseToStress = selectRandomResponse(responsesToStress);
        const ToStressMessage = this.createChatBotMessage(responseToStress)
        this.updateChatbotState(ToStressMessage)
    }
    responseToBored(){
        const ToBoredMessage = this.createChatBotMessage("Y, a parte de aburrimiento o demostivación, ¿qué sientes?")
        this.updateChatbotState(ToBoredMessage)
    }
    responseToFrustration(){
        const ToFrustrationMessage = this.createChatBotMessage("Y, a parte de frustración o impotencia, ¿qué sientes?")
        this.updateChatbotState(ToFrustrationMessage)
    }
    responseToDisappointment(){
        const ToDisappointmentMessage = this.createChatBotMessage("Y, a parte de decepción, ¿qué sientes?")
        this.updateChatbotState(ToDisappointmentMessage)
    }
    responseToVeryBad(){
        const ToVeryBadMessage = this.createChatBotMessage("Siento que estés tan mal, pero ¿podrías expresarte con más precisión?")
        this.updateChatbotState(ToVeryBadMessage)
    }
    responseToAntonyms() {
        if (responsesToAntonyms.length === 0) {
            responsesToAntonyms = ["Comprendo que tu estado de ánimo es bastante bueno. ¿Podrías contarme con más detalle cómo te sientes?"];
        }
        let responseToAntonyms = selectRandomResponse(responsesToAntonyms);
        const ToAntonymsMessage = this.createChatBotMessage(responseToAntonyms)
        this.updateChatbotState(ToAntonymsMessage)
    }
    responseToBadFeelings() {
        if (responsesToBadFeelings.length === 0) {
            responsesToBadFeelings = ["Vale, veo que no te encuentras del todo bien pero cuéntame más sobre cómo te sientes."];
        }
        let responseToBadFeelings = selectRandomResponse(responsesToBadFeelings);
        const responseToBadFeelingsMessage = this.createChatBotMessage(responseToBadFeelings)
        this.updateChatbotState(responseToBadFeelingsMessage)
    }
    responseToLongAnswer(){
        if (responsesToLongAnswer.length === 0) {
            responsesToLongAnswer = "Comprendo que estás siendo detallado en tus explicaciones pero para poder evaluarte necesito que te centres un poco más en tus sentimientos, estados de ánimo y emociones.";
        }
        let responseToLongAnswer = selectRandomResponse(responsesToLongAnswer);
        const responseToLongAnswerMessage = this.createChatBotMessage(responseToLongAnswer)
        this.updateChatbotState(responseToLongAnswerMessage)
    }
    responseToNoMessage(){
        const responseToNoMessage = this.createChatBotMessage("Para poder evaluarte necesito que describas cómo te sientes con tanta precisión como te sea posible.")
        this.updateChatbotState(responseToNoMessage)
    }
    responseToNoKeywords() {
        if (responsesToNoKeywords.length === 0) {
            responsesToNoKeywords = "Desafortunadamente, aún no tengo suficiente información para evaluarte. Necesito que las descripciones sean más precisas.";
        }
        
        let responseToNoKeywords = responsesToNoKeywords[0];
        let index = responsesToNoKeywords.indexOf(responseToNoKeywords);
        responsesToNoKeywords.splice(index, 1);
        const responseToNoKeywordsMessage = this.createChatBotMessage(responseToNoKeywords)
        this.updateChatbotState(responseToNoKeywordsMessage)
    }
    endConversation() {
        const endConversationMessage = this.createChatBotMessage("Ya tengo suficiente información para hacer una evaluación de tu estado. Para finalizar el test, por favor, haz click en Finalizar Test. Gracias por compartir este rato conmigo, ¡hasta la próxima!", { widget: "EndTest" })
        this.updateChatbotState(endConversationMessage)
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}


export default ActionProvider;
