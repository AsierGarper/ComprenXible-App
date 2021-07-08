using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using comprenXible_API.Data;
using comprenXible_API.Models;

namespace comprenXible_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeyWordReiterationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public KeyWordReiterationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/KeyWordReiterations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KeyWordReiteration>>> GetKeyWordReiteration()
        {
            return await _context.KeyWordReiteration.ToListAsync();
        }

        // GET: api/KeyWordReiterations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<KeyWordReiteration>> GetKeyWordReiteration(int id)
        {
            var keyWordReiteration = await _context.KeyWordReiteration.FindAsync(id);

            if (keyWordReiteration == null)
            {
                return NotFound();
            }

            return keyWordReiteration;
        }

        // PUT: api/KeyWordReiterations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKeyWordReiteration(int id, KeyWordReiteration keyWordReiteration)
        {
            if (id != keyWordReiteration.Id)
            {
                return BadRequest();
            }

            _context.Entry(keyWordReiteration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KeyWordReiterationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/KeyWordReiterations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<KeyWordReiteration>> PostKeyWordReiteration(KeyWordReiteration keyWordReiteration)
        {
            _context.KeyWordReiteration.Add(keyWordReiteration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKeyWordReiteration", new { id = keyWordReiteration.Id }, keyWordReiteration);
        }

        // DELETE: api/KeyWordReiterations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKeyWordReiteration(int id)
        {
            var keyWordReiteration = await _context.KeyWordReiteration.FindAsync(id);
            if (keyWordReiteration == null)
            {
                return NotFound();
            }

            _context.KeyWordReiteration.Remove(keyWordReiteration);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KeyWordReiterationExists(int id)
        {
            return _context.KeyWordReiteration.Any(e => e.Id == id);
        }
    }
}
