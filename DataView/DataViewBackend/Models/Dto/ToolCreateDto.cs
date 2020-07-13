using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataViewBackend.Models.Dto
{
    public class ToolCreateDto
    {
      
        [Required]
        public string ToolName { get; set; }
        [Required]
        public DateTime DtStart { get; set; }
        [Required]
        public DateTime DtEnd { get; set; }
        [Required]
        public int UserId { get; set; }
        
    }
}