using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.DTO
{
    public class UserCredentials
    {
            public string UserEmail { get; set; }
            public string UserPassword { get; set; }
        
            public UserCredentials(string mail , string pass)
        {
            UserEmail = mail;
            UserPassword = pass;
        }
    }
}
