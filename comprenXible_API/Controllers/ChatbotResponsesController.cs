using comprenXible_API.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatbotResponsesController : ControllerBase
    {

        // GET: api/ChatbotResponse
        [HttpPost]
        public bool GetChatbotResponses(ChatbotResponse chatbotResponse)
        {

            //Deprecated -- this is currently done at front
            //string sentencesWithoutPunctuation = new string(chatbotResponse.Response.Where(c => !char.IsPunctuation(c)).ToArray());
            //string[] words = sentencesWithoutPunctuation.Split(' ');
            //
            double Score = WordsScoreCalc(chatbotResponse.Response);

            if (Score >= 3)
            {
                //Score = 3;
                //double chatbotScore = ChatbotScoreCalculation(chatbotResponse.Response, Score, 0);
                return true;
            }
            else if (chatbotResponse.Response.Length > 200)
            {
                //double chatbotScore = ChatbotScoreCalculation(chatbotResponse.Response, Score, elapsedTime);
                return true;
            }
            else
            {
                return false;
            }             
  
        }

        static double ChatbotScoreCalculation(Array words, double chatbotWordsScore, TimeSpan elapsedTime)
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
            double minutes = elapsedTime.TotalSeconds / 60;
            if (minutes >= 7)
            {
                chatbotPatternsScore = +1;
            }

            //final score
            chatbotScore = chatbotWordsScore + chatbotPatternsScore;
            return chatbotScore;
        }

        public double WordsScoreCalc(string[] response)
        {
            int amountOfMatchingKeywordsX02 = 0;
            int amountOfMatchingKeywordsX03 = 0;
            int amountOfMatchingKeywordsX04 = 0;

            double chatbotWordsScore;

            //This to the DBB
            //keywords
            foreach (var word in response)
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

        //string evaluation = string.Empty;
        //axios questionsscore//
        //double totalScore = chatbotScore + questionsScore;
        //if (totalscore < 5)
        //{
        //evaluation = "no se aprecian rasgos depresivos.";
        //}
        //else if (totalscore > 5 && totalscore < 10)
        //{
        //evaluation = "rasgos depresivos leves, se recomienda consultar con un especialista.";
        //}
        //else if (totalscore > 10 && totalscore <= 15)
        //{
        //    evaluation = "rasgos depresivos severos. es necesaria la consulta urgente con un especialista.";
        //}

    }
}
