namespace DataViewBackend.Models.Dto.EventDto
{
    public class CreateEventDto
    {
        public int AssignerId { get; set; }
        public string AssignerName { get; set; }
        public string Description { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public int[] Users { get; set; }
    }
}