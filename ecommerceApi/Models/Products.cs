using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace EcommerceAPI.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        //Auto-incremented primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; } //primary key

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty; //product name

        [Required]
        [MaxLength(500)]
        public string Description { get; set; } = string.Empty; //product description

        [Required]
        //Price must be non-negative
        [Range(0, double.MaxValue, ErrorMessage = "Price cannot be negative")]
        public decimal Price { get; set; } //product price

        [Required]
        //Stock must be non-negative
        [Range(0, int.MaxValue, ErrorMessage = "Stock cannot be negative")]
        public int Stock { get; set; } //available stock
    }
}