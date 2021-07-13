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

        public Auth(TokenService tokenService)
        {
            this.TokenService = tokenService;
        }

        //This method gets the UserCredentials, validates them via the userServices & creates a token with the tokenService
        public string Authenticate(UserCredentials userCredentials)
        {
            //ValidationService.ValidateCredentials(userCredentials);
            string securityToken = TokenService.GetToken();

            return securityToken;
        }
    }
}
