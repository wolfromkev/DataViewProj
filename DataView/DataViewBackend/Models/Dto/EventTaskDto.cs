using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models.Dto
{
    public class EventTaskDto
    {
        [Required]
        public int AssignerId { get; set; }
        public string AssignerName { get; set; }
        
        [Required]
        public int AssigneeId { get; set; }
        public string AssigneeName { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public string Start { get; set; }
        
        [Required]
        public string End { get; set; }
        
    }
}