using System;
using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models.Dto
{
    public class WeeklyYieldDataDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Scraps { get; set; }
        [Required]
        public int AverageYield { get; set; }
        [Required]
        public int CoaterUptime { get; set; }
        [Required]
        public int EtcherUptime { get; set; }
        [Required]
        public int PolisherUptime { get; set; }
        [Required]
        public int GrinderUptime { get; set; }
        [Required]
        public int DicerUptime { get; set; }
    }
}


