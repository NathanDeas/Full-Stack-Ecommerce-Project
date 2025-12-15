using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceAPI.Data;
using EcommerceAPI.Models;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Users Get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }
         //GET: api/users/{id} Get user by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUser([FromRoute] int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/Users Create a new user
        [HttpPost]
        public async Task<ActionResult<Users>> CreateUser(Users user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }

        // PUT: api/Users/{id} Update an existing user
        [HttpPut("{id}")]
        public async Task<ActionResult<Users>> UpdateUser(int id, Users user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            var euser = await _context.Users.FindAsync(id);
            if (euser == null)
            {
                return NotFound();
            }
            euser.Username = user.Username;
            euser.Email = user.Email;
            euser.PasswordHash = user.PasswordHash;

            await _context.SaveChangesAsync();
            return euser;
        }
        // DELETE: api/Users/{id} Delete a user
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}