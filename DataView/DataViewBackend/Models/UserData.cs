using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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