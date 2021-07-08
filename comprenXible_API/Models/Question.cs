using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }
    }
}
