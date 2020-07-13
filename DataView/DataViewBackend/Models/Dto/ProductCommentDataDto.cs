using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataViewBackend.Models.Dto
{
    public class ProductCommentDataDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Comment { get; set; }
        public DateTime Created { get; set; }
        [Required]
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public UserData User { get; set; }
    }
}
