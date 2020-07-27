namespace DataViewBackend.Models.Dto.EventDto
{
    public class UpdateEventDto
    {
        public int Id { get; set; }
        public int AssignerId { get; set; }
        public string AssignerName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
    }
}