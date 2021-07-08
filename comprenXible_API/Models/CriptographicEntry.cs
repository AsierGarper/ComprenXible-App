using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class CriptographicEntry
    {
        [Key]
        public int Id { get; set; }
        public string UserEmail { get; set; }
        public string Dek { get; set; }
        public string DekIv { get; set; }
        public string DekSalt { get; set; }
        public string KekIv { get; set; }
        public string KekSalt { get; set; }
    }
}
