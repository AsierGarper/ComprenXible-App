using comprenXible_API.Authentication_;
using comprenXible_API.Data;
using comprenXible_API.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly ApplicationDbContext _context;

            public AuthenticationController(Auth authenticationService, ApplicationDbContext context)
            {
                this.authenticationService = authenticationService;
                _context = context;
            }



        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody] UserCredentials userCredentials)
        {
            try
            {
                string token = authenticationService.Authenticate(userCredentials);
                if(await _context.User.Where(u => u.Email == userCredentials.UserEmail && u.Password == userCredentials.Password).FirstOrDefaultAsync() != null)
                {
                //if everything's allright, this will return an OK with the token! Marvelous!
                return Ok(token);
                }
                else
                {
                return Unauthorized();
                }
            }
            catch (InvalidCredentialsException)
            {
                return Unauthorized();
            }
        }


    }

}
