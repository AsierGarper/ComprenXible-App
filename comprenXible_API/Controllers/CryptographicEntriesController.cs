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
    public class CryptographicEntriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CryptographicEntriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CryptographicEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CryptographicEntry>>> GetCryptographicEntry()
        {
            return await _context.CryptographicEntry.ToListAsync();
        }

        // GET: api/CryptographicEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CryptographicEntry>> GetCryptographicEntry(int id)
        {
            var cryptographicEntry = await _context.CryptographicEntry.FindAsync(id);

            if (cryptographicEntry == null)
            {
                return NotFound();
            }

            return cryptographicEntry;
        }

        // PUT: api/CryptographicEntries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCryptographicEntry(int id, CryptographicEntry cryptographicEntry)
        {
            if (id != cryptographicEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(cryptographicEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CryptographicEntryExists(id))
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

        // POST: api/CryptographicEntries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CryptographicEntry>> PostCryptographicEntry(CryptographicEntry cryptographicEntry)
        {
            _context.CryptographicEntry.Add(cryptographicEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCryptographicEntry", new { id = cryptographicEntry.Id }, cryptographicEntry);
        }

        // DELETE: api/CryptographicEntries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCryptographicEntry(int id)
        {
            var cryptographicEntry = await _context.CryptographicEntry.FindAsync(id);
            if (cryptographicEntry == null)
            {
                return NotFound();
            }

            _context.CryptographicEntry.Remove(cryptographicEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CryptographicEntryExists(int id)
        {
            return _context.CryptographicEntry.Any(e => e.Id == id);
        }
    }
}
