using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DataViewBackend.Models.JoinTables;

namespace DataViewBackend.Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }
        [Required]
        public int AssignerId { get; set; }
        
        public string AssignerName { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public string Start { get; set; }
        
        [Required]
        public string End { get; set; }
        [JsonIgnore]
        public ICollection<EventUsers> Invitees { get; set; }
    }
}