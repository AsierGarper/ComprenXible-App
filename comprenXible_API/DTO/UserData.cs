using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.DTO
{
    public class UserData
    {
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<TestData> Tests { get; set; }

        public UserData(string? name, string? gender, List<TestData>? tests)
        {
            this.Name = name;
            this.Gender = gender;
            this.Email = null;
            this.Password = null;
            this.Tests = tests;
        }
    }
}
