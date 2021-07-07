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
    public class CriptographicEntriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CriptographicEntriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CriptographicEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CriptographicEntry>>> GetCriptographicEntry()
        {
            return await _context.CriptographicEntry.ToListAsync();
        }

        // GET: api/CriptographicEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CriptographicEntry>> GetCriptographicEntry(int id)
        {
            var criptographicEntry = await _context.CriptographicEntry.FindAsync(id);

            if (criptographicEntry == null)
            {
                return NotFound();
            }

            return criptographicEntry;
        }

        // PUT: api/CriptographicEntries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCriptographicEntry(int id, CriptographicEntry criptographicEntry)
        {
            if (id != criptographicEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(criptographicEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CriptographicEntryExists(id))
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

        // POST: api/CriptographicEntries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CriptographicEntry>> PostCriptographicEntry(CriptographicEntry criptographicEntry)
        {
            _context.CriptographicEntry.Add(criptographicEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCriptographicEntry", new { id = criptographicEntry.Id }, criptographicEntry);
        }

        // DELETE: api/CriptographicEntries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCriptographicEntry(int id)
        {
            var criptographicEntry = await _context.CriptographicEntry.FindAsync(id);
            if (criptographicEntry == null)
            {
                return NotFound();
            }

            _context.CriptographicEntry.Remove(criptographicEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CriptographicEntryExists(int id)
        {
            return _context.CriptographicEntry.Any(e => e.Id == id);
        }
    }
}
