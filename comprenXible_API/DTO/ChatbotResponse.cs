using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.DTO
{
    public class ChatbotResponse
    {
        public string[] Response { get; set; }
        public string TimeSpan { get; set; }
        public string[] AnswersToQuestionnaire { get; set; }
        public string UserEmail { get; set; }
    }
}
