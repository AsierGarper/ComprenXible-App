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
    public class ChatResultsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChatResultsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ChatResults
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChatResult>>> GetChatResult()
        {
            return await _context.ChatResult.ToListAsync();
        }

        // GET: api/ChatResults/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChatResult>> GetChatResult(int id)
        {
            var chatResult = await _context.ChatResult.FindAsync(id);

            if (chatResult == null)
            {
                return NotFound();
            }

            return chatResult;
        }

        // PUT: api/ChatResults/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChatResult(int id, ChatResult chatResult)
        {
            if (id != chatResult.Id)
            {
                return BadRequest();
            }

            _context.Entry(chatResult).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChatResultExists(id))
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

        // POST: api/ChatResults
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ChatResult>> PostChatResult(ChatResult chatResult)
        {
            _context.ChatResult.Add(chatResult);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChatResult", new { id = chatResult.Id }, chatResult);
        }

        // DELETE: api/ChatResults/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChatResult(int id)
        {
            var chatResult = await _context.ChatResult.FindAsync(id);
            if (chatResult == null)
            {
                return NotFound();
            }

            _context.ChatResult.Remove(chatResult);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChatResultExists(int id)
        {
            return _context.ChatResult.Any(e => e.Id == id);
        }
    }
}
