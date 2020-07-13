using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataViewBackend.Models.Dto
{
    public class ToolDataDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ToolName { get; set; }
        [Required]
        public DateTime DtStart { get; set; }
        [Required]
        public DateTime DtEnd { get; set; }
        [Required]
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public UserData User { get; set; }
    }
}