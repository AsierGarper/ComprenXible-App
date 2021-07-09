using comprenXible_API.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Authentication_
{
    public class Auth
    {
        //Both token and user services are inyected
        private readonly TokenService TokenService;
        private readonly UserService UserService;

        public Auth(TokenService tokenService, UserService userService)
        {
            this.TokenService = tokenService;
            this.UserService = userService;
        }

        //This method gets the UserCredentials, validates them via the userServices & creates a token with the tokenService
        public string Authenticate(UserCredentials userCredentials)
        {
            UserService.ValidateCredentials(userCredentials);
            string securityToken = TokenService.GetToken();

            return securityToken;
        }
    }
}
