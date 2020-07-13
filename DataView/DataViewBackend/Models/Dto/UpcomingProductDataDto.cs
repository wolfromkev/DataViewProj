using System;
using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models.Dto
{
    public class UpcomingProductDataDto
    
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Day { get; set; }
        [Required]
        public int ExpectedProducts { get; set; }
    }
}
