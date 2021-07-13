using comprenXible_API.Authentication_;
using comprenXible_API.Data;
using comprenXible_API.DTO;
using comprenXible_API.Encryptation;
using comprenXible_API.Models;
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
                byte[] email = pbkdf2.Hash(userCredentials.UserEmail);

                if (_context.User.Any(u => u.HashedEmail == email))
                {
                    CryptographicEntry keys = await _context.CryptographicEntry.Where(c => c.UserEmail == email).FirstOrDefaultAsync();

                    if (keys != null && _context.User.Any(u => u.Password == pbkdf2.Hash(keys.SecSalt, userCredentials.UserPassword)))
                    {
                        string token = authenticationService.Authenticate();
                        //User found! this will return an OK with the token! Marvelous!
                        return Ok(token);
                    }
                    else
                    {
                        return Unauthorized("Password seems to be incorrect");
                    }
                }
                else
                {
                return Unauthorized("No account found with this email");
                }
            }
            catch (Exception)
            {
                return Unauthorized("Oops! And unknown error happened");
            }
        }


    }

}
