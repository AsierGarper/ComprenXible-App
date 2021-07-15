using comprenXible_API.Data;
using comprenXible_API.DTO;
using comprenXible_API.Models;
using comprenXible_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatbotResponsesController : ControllerBase
    {
        //private readonly ApplicationDbContext _context;
        private readonly IEmailService _emailService;
        private readonly ITestService _testService;

        public ChatbotResponsesController(IEmailService emailService,/* ApplicationDbContext context,*/ ITestService testService)
        {
            _emailService = emailService;
            _testService = testService;
            //_context = context;
        }

        // GET: api/ChatbotResponse
        [HttpPost]
        public bool GetChatbotResponses([FromBody] ChatbotResponse chatbotResponse)
        {
            string chatbotResponseWithoutPunctuation = string.Empty;
            foreach (var response in chatbotResponse.Response)
            {
                chatbotResponseWithoutPunctuation += Regex.Replace(response, @"[^\w\s]", "");
            }

            string[] chatbotResponseStrings = chatbotResponseWithoutPunctuation.Split(' ');

            List<string> chatbotResponseWords = new List<string>();
            foreach (var item in chatbotResponseStrings)
            {
                if (item != "")
                {
                    chatbotResponseWords.Add(item);
                }
            }

            double wordsScore = WordsScoreCalc(chatbotResponseWords);

            string answersToQuestionnaireString = chatbotResponse.AnswersToQuestionnaire;

            double questionsScore = QuestionsScoreCalculation(answersToQuestionnaireString);
            double totalResults;
            EmailInfo emailInfo = new EmailInfo();
            string resultType = string.Empty;

            if (wordsScore >= 3 || chatbotResponseWords.Count > 200)
            {
                if (wordsScore >= 3)
                {
                    wordsScore = 3;
                }
                totalResults = ChatbotScoreCalculation(chatbotResponse.Response, wordsScore, Convert.ToDouble(chatbotResponse.TimeSpan)) + questionsScore;
                if (totalResults < 5)
                {
                    emailInfo.EmailTo = chatbotResponse.UserEmail;
                    resultType = "no symptoms";
                }
                else if (totalResults >= 5 && totalResults <= 10)
                {
                    emailInfo.EmailTo = chatbotResponse.UserEmail;
                    resultType = "mild symptoms";
                }
                else if (totalResults > 10 && totalResults <= 15)
                {
                    emailInfo.EmailTo = chatbotResponse.UserEmail;
                    resultType = "severe symptoms";
                }

               
                UserCredentials credentials = new UserCredentials();
                credentials.UserEmail = chatbotResponse.UserEmail;
                credentials.UserPassword = chatbotResponse.UserPassword;

                //Now we need to save all this to the database
                _testService.TestStorageAsync(totalResults, credentials);
                //And send the email
                _emailService.SendEmailAsync(emailInfo, totalResults, resultType, chatbotResponse.UserName, chatbotResponse.psychologistsInfo);
                return true;
            }
            else
            {
                return false;
            }

        }
        static double QuestionsScoreCalculation(string answersToQuestionnaireString)
        {
            double questionsScore = 0;
            string[] answersToQuestionnaireArray = answersToQuestionnaireString.Split(",");

            if (answersToQuestionnaireArray != null)
            {
                foreach (var answer in answersToQuestionnaireArray)
                {
                    if (answer == "A")
                    {
                        questionsScore += 0.25;
                    }
                    else if (answer == "B")
                    {
                        questionsScore += 0.5;
                    }
                    else if (answer == "C")
                    {
                        questionsScore += 0.75;
                    }
                    else
                    {
                        questionsScore += 1;
                    }
                }
            }

            return questionsScore;
        }

        static double ChatbotScoreCalculation(Array words, double chatbotWordsScore, double elapsedTime)
        {
            int amountOfFirstPersonSingularPronouns = 0;
            int amountOfOtherPronouns = 0;
            double chatbotScore;
            double chatbotPatternsScore = 0;

            foreach (string word in words)
            {
                //pronouns
                if (word == "yo" ||
                    word == "mi" ||
                    word == "me" ||
                    word == "conmigo")
                {
                    amountOfFirstPersonSingularPronouns++;
                }
                else if (word == "tú" ||
                    word == "tu" ||
                    word == "te" ||
                    word == "ti" ||
                    word == "contigo" ||
                    word == "él" ||
                    word == "ella" ||
                    word == "ellos" ||
                    word == "ellas" ||
                    word == "les" ||
                    word == "las" ||
                    word == "vosotros" ||
                    word == "vosotras" ||
                    word == "os" ||
                    word == "usted" ||
                    word == "ustedes")
                {
                    amountOfOtherPronouns++;
                }
            }
            if (amountOfFirstPersonSingularPronouns > amountOfOtherPronouns)
            {
                chatbotPatternsScore = +1;
            }

            //rumination
            Dictionary<string, int> dictionary = new Dictionary<string, int>();
            List<string> wordsList = new List<string>();
            foreach (string word in words)
            {
                if (word.Length >= 3 && word != "muy" && word != "con" && word != "que" && word != "las" && word != "los" && word != "por" && word != "nos" && word != "mis" && word != "está" && word != "esta" && word != "todo")
                {
                    wordsList.Add(word);
                }
            }
            for (int i = 0; i < wordsList.Count; i++)
            {
                if (dictionary.ContainsKey(wordsList[i])) // if word already exist in dictionary update the count  
                {
                    int amount = dictionary[wordsList[i]];
                    dictionary[wordsList[i]] = amount + 1;
                }
                else
                {
                    dictionary.Add(wordsList[i], 1);  // if a string is not added in dictionary, add it
                }
            }
            bool rumination = false;
            foreach (KeyValuePair<string, int> kvp in dictionary)
            {
                Console.WriteLine(kvp.Key + " = " + kvp.Value);
                if (kvp.Value > (words.Length * 2.2 / 100))
                {
                    rumination = true;
                }
            }
            if (rumination)
            {
                chatbotPatternsScore = +1;
            }

            //stopwatch

            if (elapsedTime >= 7)
            {
                chatbotPatternsScore = +1;
            }

            //final score
            chatbotScore = chatbotWordsScore + chatbotPatternsScore;
            return chatbotScore;
        }

        public double WordsScoreCalc(List<string> responseWords)
        {
            int amountOfMatchingKeywordsX02 = 0;
            int amountOfMatchingKeywordsX03 = 0;
            int amountOfMatchingKeywordsX04 = 0;

            double chatbotWordsScore;

            //This to the DBB
            //keywords
            foreach (var word in responseWords)
            {
                if (word == "miserable" ||
                    word == "despreciable" ||
                    word == "siempre" ||
                    word == "constantemente" ||
                    word == "nunca" ||
                    word == "jamás" ||
                    word == "jamas" ||
                    word == "insomnio" ||
                    word == "despierto" ||
                    word == "despierta" ||
                    word == "sueño" ||
                    word == "culpa" ||
                    word == "falta" ||
                    word == "responsabilidad")
                {
                    amountOfMatchingKeywordsX02++;
                }
                else if (word == "solitario" ||
                    word == "solitaria" ||
                    word == "solo" ||
                    word == "sola" ||
                    word == "soledad" ||
                    word == "abandono" ||
                    word == "abandonado" ||
                    word == "abandonada" ||
                    word == "triste" ||
                    word == "tristeza" ||
                    word == "enfadado" ||
                    word == "enfadada" ||
                    word == "cabreado" ||
                    word == "cabreada" ||
                    word == "odio" ||
                    word == "solución" ||
                    word == "solucion" ||
                    word == "remedio" ||
                    word == "esperanza")
                {
                    amountOfMatchingKeywordsX03++;
                }
                else if (word == "deprimido" ||
                    word == "deprimida" ||
                    word == "depresión" ||
                    word == "depresion" ||
                    word == "enfermo" ||
                    word == "enferma" ||
                    word == "bajón" ||
                    word == "bajon" ||
                    word == "morir" ||
                    word == "matarme" ||
                    word == "muerte" ||
                    word == "suicidio")
                {
                    amountOfMatchingKeywordsX04++;
                }

            }
            chatbotWordsScore = amountOfMatchingKeywordsX02 * 0.2 + (amountOfMatchingKeywordsX03 * 0.3) + (amountOfMatchingKeywordsX04 * 0.4);
            return chatbotWordsScore;
        }


    }
}
