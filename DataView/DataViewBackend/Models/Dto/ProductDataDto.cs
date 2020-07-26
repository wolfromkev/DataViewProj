using System;
using System.ComponentModel.DataAnnotations;

namespace DataViewBackend.Models.Dto
{
    public class ProductDataDto
    {
        [Key]
        public int Id { get; set; }
        public string StartTime { get; set; }
        public string FinishTime { get; set; }
        
        public int StartBubbles { get; set; }
        public int StartScratches { get; set; }
        public int StartParticles { get; set; }
        public int StartChips { get; set; }
        public int StartUnknown { get; set; }
        public int StartTotal { get; set; }
        
        public int GrindBubbles { get; set; }
        public int GrindScratches { get; set; }
        public int GrindParticles { get; set; }
        public int GrindChips { get; set; }
        public int GrindUnknown { get; set; }
        public int GrindTotal { get; set; }
        
        public int PolishBubbles { get; set; }
        public int PolishScratches { get; set; }
        public int PolishParticles { get; set; }
        public int PolishChips { get; set; }
        public int PolishUnknown { get; set; }
        public int PolishTotal { get; set; }
        
        public int CoatBubbles { get; set; }
        public int CoatScratches { get; set; }
        public int CoatParticles { get; set; }
        public int CoatChips { get; set; }
        public int CoatUnknown { get; set; }
        public int CoatTotal { get; set; }
        
        public int EtchBubbles { get; set; }
        public int EtchScratches { get; set; }
        public int EtchParticles { get; set; }
        public int EtchChips { get; set; }
        public int EtchUnknown { get; set; }
        public int EtchTotal { get; set; }
        
        public int DiceBubbles { get; set; }
        public int DiceScratches { get; set; }
        public int DiceParticles { get; set; }
        public int DiceChips { get; set; }
        public int DiceUnknown { get; set; }
        public int DiceTotal { get; set; }
    }
}


