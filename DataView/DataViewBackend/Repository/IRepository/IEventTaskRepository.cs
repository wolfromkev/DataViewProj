using System.Collections;
using System.Collections.Generic;
using DataViewBackend.Models;


namespace DataViewBackend.Repository.IRepository
{
    public interface IEventTaskRepository
    {
        ICollection<EventTask> GetEventTasks(int userId);
        EventTask GetEventTask(int eventTaskId);
        bool EventTaskExists(int id);
        bool CreateEventTask(EventTask eventTask);
        bool UpdateEventTask(EventTask eventTask);
        bool DeleteEventTask(EventTask eventTask);
    }
}