using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class ChatResult
    {
        public int Id { get; set; }
        public int AnswerTime { get; set; } //In ms
        public string Rumination { get; set; } //Mapped dictionary
        public bool Pronouns { get; set; }
        public int WordCount { get; set; }

        //FFKK
        public int ResultId { get; set; }

        public List<KeyWordReiteration> KeyWords { get; set; }
    }
}
