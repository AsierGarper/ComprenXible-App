﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Models
{
    public class Test
    {
        [Key]
        public int Id { get; set; }
        public string Score { get; set; }
        public string Date { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
    }
}