namespace DataViewBackend.Models.Dto.TaskDTOs
{
    public class UpdateTaskDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string End { get; set; }
    }
}