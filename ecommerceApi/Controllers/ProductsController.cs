using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceAPI.Data;
using EcommerceAPI.Models;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        //GET: api/products/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct([FromRoute] int id)
        {   
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
        }

        // PUT: api/Products/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            var eproduct = await _context.Products.FindAsync(id);
            if (eproduct == null)
            {
                return NotFound();
            }
            eproduct.Name = product.Name;
            eproduct.Description = product.Description;
            eproduct.Price = product.Price;
            eproduct.Stock = product.Stock;
            await _context.SaveChangesAsync();
            return Ok(eproduct);
        }

        // DELETE: api/Products/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }
    }
}