using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class QuestionsResult
    {
        [Key]
        public int Id { get; set; }
        public string Anwers { get; set; } //Mapped list

        public int ResultId { get; set; }
    }
}
