using System;
using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models
{
    public class UpcomingProductData
    
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int ExpectedProducts { get; set; }
    }
}
