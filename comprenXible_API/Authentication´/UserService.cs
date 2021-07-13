using comprenXible_API.Data;
using comprenXible_API.DTO;
using comprenXible_API.Models;
using Microsoft.EntityFrameworkCore;
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
            users = new List<UserCredentials>
        {
            new UserCredentials
            {
                UserEmail = "john.doe",
                UserPassword = "john.password"
            }
        };
        }

        public void ValidateCredentials(UserCredentials userCredentials)
        {

            bool isValid =
            users.Any(u =>
                u.UserEmail == userCredentials.UserEmail &&
                u.UserPassword == userCredentials.UserPassword);


            if (!isValid)
            {
                throw new InvalidCredentialsException("the email or password are not valid");
            }
        }     

    }
}
