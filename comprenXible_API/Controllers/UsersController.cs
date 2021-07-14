using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using comprenXible_API.Data;
using comprenXible_API.Models;
using comprenXible_API.Encryptation;
using System.Text;
using comprenXible_API.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/Users
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet]
        public async Task<ActionResult<UserData>> GetUser(UserCredentials credentials)
        {
            try
            {
            byte[] email = pbkdf2.Hash(credentials.UserEmail);
            CryptographicEntry keys = await _context.CryptographicEntry.Where(c => c.UserEmail == email).FirstOrDefaultAsync();
            User user = await _context.User.Where(u => u.HashedEmail == email).FirstOrDefaultAsync();

            return  CryptoService.Decrypt(user, keys, credentials);       

            }
            catch (Exception)
            {
                return Unauthorized("User not found");
            }
        }

        // GET: api/Users
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<User>>> GetUser()
        //{
        //    return await _context.User.ToListAsync();
        //}

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutUser(UserData data)
        {
            byte[] email = pbkdf2.Hash(data.Email);
            CryptographicEntry keys = await _context.CryptographicEntry.Where(c => c.UserEmail == email).FirstOrDefaultAsync();
            User user = await _context.User.Where(u => u.Password == pbkdf2.Hash(keys.SecSalt, data.Password)).FirstOrDefaultAsync();

            CryptoService.ReEncryptReferences(ref user, ref keys, data);

            //Note that now we need to change the email of all tests linked with this user, only in case their email has changed
            if (data.NewEmail != null)
            {
                byte[] hashMail = pbkdf2.Hash(data.NewEmail);

                if (user.HashedEmail != hashMail)
                {
                    List<Test> tests = await _context.Test.Where(t => t.UserEmail == hashMail).ToListAsync();

                    foreach (Test test in tests)
                    {
                        test.UserEmail = user.HashedEmail;
                        _context.Test.Update(test);
                    }

                }
            }
            _context.User.Update(user);
            _context.CryptographicEntry.Update(keys);
            return AcceptedAtAction("PutUser", new { id = user.Id }, user);

        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(UserData userData)
        {
            if (_context.User.Any(u => u.HashedEmail == pbkdf2.Hash(userData.Email)))
            {
                //This will return an error cause the email /that should be unique/ is already in the database
                return Unauthorized("An account with this email already exists");
            }
            else
            {
                try
                {
                    //New user is created
                    User user = new User();

                    //First we need a brand new full randomized entry
                    CryptographicEntry keys = new CryptographicEntry();

                    CryptoService.EncryptReferences(ref user, ref keys, userData);

                    //The store data and we're done
                    _context.CryptographicEntry.Add(keys);
                    _context.User.Add(user);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetUser", new { id = user.Id }, user);
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
