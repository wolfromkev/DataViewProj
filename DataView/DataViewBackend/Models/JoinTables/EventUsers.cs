namespace DataViewBackend.Models.JoinTables
{
    public class EventUsers
    {
        public int UserId { get; set; }
        public int EventId { get; set; }
        
        public UserData UserData { get; set; }
        public Event Event { get; set; }
    }
}