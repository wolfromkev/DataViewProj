namespace DataViewBackend.Models.Dto.TaskDTOs
{
    public class TaskDto
    {
        public string Title { get; set; }
        public int AssignerId { get; set; }
        public string AssignerName { get; set; }
        public string Description { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public int[] Users { get; set; }
        
    }
}