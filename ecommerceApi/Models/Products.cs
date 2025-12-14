namespace EcommerceAPI.Models
{
    public class Product
    {
        
        public int Id { get; set; } //primary key
        public string Name { get; set; } //product name
        public string Description { get; set; } //product description
        public decimal Price { get; set; } //product price
        public int Stock { get; set; } //available stock
    }
}