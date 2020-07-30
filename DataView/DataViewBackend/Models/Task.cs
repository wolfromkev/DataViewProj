using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DataViewBackend.Models.JoinTables;

namespace DataViewBackend.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        
        public string Title { get; set; }

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
        [Required]
        public bool Completed { get; set; }
        
        
    }
}