using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DataViewBackend.Models.JoinTables;

namespace DataViewBackend.Models
{
    public class UserData
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public string Role { get; set; }
        
        public string UserDescription { get; set; }
        
        public byte[] Image { get; set; }
        
        public DateTime CreatedAt { get; set; }
        
        public ICollection<EventUsers> Events { get; set; }
        
        public string FullName {
            get
            {
                return $"{FirstName} {LastName}";
            }
            
        }

        [NotMapped]
        public string Token { get; set; }
    }
}