using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public byte[] Name { get; set; }
        public byte[] HashedEmail { get; set; }
        public byte[] Gender { get; set; }
        public byte[] Email { get; set; }
        public byte[] Password { get; set; }
    }
}
