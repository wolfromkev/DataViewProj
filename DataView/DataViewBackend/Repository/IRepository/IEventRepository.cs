using System.Collections.Generic;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Models.Dto.EventDto;
using DataViewBackend.Models.JoinTables;

namespace DataViewBackend.Repository.IRepository
{
    public interface IEventRepository
    {
        IList<EventDto> GetEvents(int userId);
        bool EventExists(int id);
        Event GetEvent(int id);
        CreateEventDto CreateEvent(CreateEventDto eventObj);
        bool UpdateEvent(int userId, UpdateEventDto eventObj);
        bool DeleteEvent(int eventId, int userId);
    }
}