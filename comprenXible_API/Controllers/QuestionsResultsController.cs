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
    public class QuestionsResultsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public QuestionsResultsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/QuestionsResults
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionsResult>>> GetQuestionsResult()
        {
            return await _context.QuestionsResult.ToListAsync();
        }

        // GET: api/QuestionsResults/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionsResult>> GetQuestionsResult(int id)
        {
            var questionsResult = await _context.QuestionsResult.FindAsync(id);

            if (questionsResult == null)
            {
                return NotFound();
            }

            return questionsResult;
        }

        // PUT: api/QuestionsResults/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestionsResult(int id, QuestionsResult questionsResult)
        {
            if (id != questionsResult.Id)
            {
                return BadRequest();
            }

            _context.Entry(questionsResult).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionsResultExists(id))
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

        // POST: api/QuestionsResults
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QuestionsResult>> PostQuestionsResult(QuestionsResult questionsResult)
        {
            _context.QuestionsResult.Add(questionsResult);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestionsResult", new { id = questionsResult.Id }, questionsResult);
        }

        // DELETE: api/QuestionsResults/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestionsResult(int id)
        {
            var questionsResult = await _context.QuestionsResult.FindAsync(id);
            if (questionsResult == null)
            {
                return NotFound();
            }

            _context.QuestionsResult.Remove(questionsResult);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestionsResultExists(int id)
        {
            return _context.QuestionsResult.Any(e => e.Id == id);
        }
    }
}
