using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class Result
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public double Score { get; set; }

        //FFKK
        public int QuestionResultId { get; set; }
        public QuestionsResult QuestionsResult { get; set; }

        public int ChatResultId { get; set; }
        public ChatResult ChatResult { get; set; }
    }
}
