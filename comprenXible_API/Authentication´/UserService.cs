using comprenXible_API.DTO;
using Microsoft.VisualStudio.Services.WebApi.Jwt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Authentication_
{
    public class UserService
    {
        private readonly IEnumerable<UserCredentials> users;

        public UserService()
        {
            // HERE WE NEED TO GET THE FULL LIST OF CLIENTS
            users = new List<UserCredentials>
        {
            new UserCredentials
            {
                UserEmail = "john.doe@mail.net",
                Password = "123456"
            }
        };
        }

        public void ValidateCredentials(UserCredentials userCredentials)
        {
            bool isValid =
                users.Any(u =>
                    u.UserEmail == userCredentials.UserEmail &&
                    u.Password == userCredentials.Password);

            if (!isValid)
            {
                throw new InvalidCredentialsException("the email or password are not valid");
            }
        }


    }
}
