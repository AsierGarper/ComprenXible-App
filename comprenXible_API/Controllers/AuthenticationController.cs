using comprenXible_API.Authentication_;
using comprenXible_API.Data;
using comprenXible_API.DTO;
using comprenXible_API.Encryptation;
using comprenXible_API.Models;
using comprenXible_API.Services;
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
        private readonly ITestService _testService;

            public AuthenticationController(Auth authenticationService, ApplicationDbContext context, ITestService testService )
            {
                this.authenticationService = authenticationService;
                _context = context;
                _testService = testService;
            }



        [HttpPost]
        public async Task<ActionResult<UserData>> Authenticate([FromBody] UserCredentials userCredentials)
        {
            try
            {
                byte[] email = pbkdf2.Hash(userCredentials.UserEmail);

                if (_context.User.Any(u => u.HashedEmail == email))
                {
                    CryptographicEntry keys = await _context.CryptographicEntry.Where(c => c.UserEmail == email).FirstOrDefaultAsync();
                    User user = await _context.User.Where(u => u.Password == pbkdf2.Hash(keys.SecSalt, userCredentials.UserPassword)).FirstOrDefaultAsync();

                    if (keys != null && user != null)
                    {
                        UserData userData = CryptoService.Decrypt(user, keys, userCredentials);
                        userData.Tests = _testService.GetTests(keys, userCredentials);
                        //string token = authenticationService.Authenticate();
                        //User found! this will return an OK with the token! Marvelous!
                        return userData;
                    }
                    else
                    {
                        return Unauthorized("No account found with these credentials");
                    }
                }
                else
                {
                return Unauthorized("No account found with these credentials");
                }
            }
            catch (Exception)
            {
                return Unauthorized("And unknown error happened");
            }
        }


    }

}
