using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class KeyWord
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }
        public double Score { get; set; }
        public List<KeyWordReiteration> Reiteration { get; set; }
    }
}
