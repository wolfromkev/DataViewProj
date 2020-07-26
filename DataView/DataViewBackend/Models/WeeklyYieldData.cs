using System;
using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models
{
    public class WeeklyYieldData
    {
        [Key]
        public int Id { get; set; }
        public int Scraps { get; set; }
        public int AverageYield { get; set; }
        public int CoaterUptime { get; set; }
        public int EtcherUptime { get; set; }
        public int PolisherUptime { get; set; }
        public int GrinderUptime { get; set; }
        public int DicerUptime { get; set; }
    }
}


