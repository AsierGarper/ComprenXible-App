using comprenXible_API.Authentication_;
using comprenXible_API.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Services.WebApi.Jwt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        //This is the Auth Dependency Inyection
            private readonly Auth authenticationService;

            public AuthenticationController(Auth authenticationService)
            {
                this.authenticationService = authenticationService;
            }



        [HttpPost]
        public IActionResult Authenticate([FromBody] UserCredentials userCredentials)
        {
            try
            {
                string token = authenticationService.Authenticate(userCredentials);
                //if everything's allright, this will return an OK with the token! Marvelous!
                return Ok(token);
            }
            catch (InvalidCredentialsException)
            {
                return Unauthorized();
            }
        }


    }

}
