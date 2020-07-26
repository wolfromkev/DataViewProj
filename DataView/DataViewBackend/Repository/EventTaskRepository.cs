using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;


namespace DataViewBackend.Repository
{
    public class EventTaskRepository : IEventTaskRepository
    {
        private readonly ApplicationDbContext _db;

        public EventTaskRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public ICollection<EventTask> GetEventTasks(int userId)
        {
            return _db.EventTask.Where(a => a.AssigneeId == userId).ToList();
        }
        public ICollection<EventTask> GetEventTasksAssigned(int userId)
        {
            return _db.EventTask.Where(a => a.AssignerId == userId).ToList();
        }
        public bool EventTaskExists(int id)
        {
            bool value = _db.EventTask.Any(a => a.Id == id);
            return value;
        }
        public bool CreateEventTask(EventTask eventTask)
        {
            _db.EventTask.Add(eventTask);
            return Save();
        }
        public bool UpdateEventTask(EventTask eventTask)
        {
            _db.EventTask.Update(eventTask);
            return Save();
        }
        public bool DeleteEventTask(EventTask eventTask)
        {
            _db.EventTask.Remove(eventTask);
            return Save();
        }
        public EventTask GetEventTask(int eventTaskId)
        {
            return _db.EventTask.FirstOrDefault(a => a.Id == eventTaskId);
        }
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}