using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Models.Dto.EventDto;
using DataViewBackend.Models.JoinTables;
using DataViewBackend.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

namespace DataViewBackend.Repository
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        
        public EventRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public IList<EventDto> GetEvents(int userId)
        {
            var events =  _db.EventUsers.Where(a=> a.UserId == userId).Include(a => a.Event).ToList();
            var returnObj = new List<EventDto>();
            foreach (var obj in events)
            {
                returnObj.Add( _mapper.Map<EventDto>(obj.Event));
            }
            return returnObj;
        }

        public bool EventExists(int id)
        {
            bool value = _db.Event.Any(a => a.Id == id);
            return value;
        }

        public Event GetEvent(int id)
        {
            return _db.Event.FirstOrDefault(a => a.Id == id);
        }

        public CreateEventDto CreateEvent(CreateEventDto eventObj)
        {
            var returnObj = new Event()
            {
                AssignerId = eventObj.AssignerId,
                AssignerName = eventObj.AssignerName,
                Description = eventObj.Description,
                Start = eventObj.Start,
                End = eventObj.End,
            };
            _db.Event.Add(returnObj);
            Save();
            
            foreach (var userId in eventObj.Users)
            {
                var eventUsersObj = new EventUsers()
                {
                    UserId = userId,
                    EventId = returnObj.Id,
                    
                };
                _db.EventUsers.Add(eventUsersObj);
            }

            Save();
            return eventObj;
        }

        public bool UpdateEvent(int userId, UpdateEventDto eventObj)
        {
            if (eventObj.AssignerId == userId)
            {
                var updatedEvent = _mapper.Map<Event>(eventObj);
                _db.Event.Update(updatedEvent);
                return Save();
            }
            return false;
        }

        public bool DeleteEvent(int eventId, int userId)
        {
            var eventToDelete = _db.EventUsers.FirstOrDefault(a => a.UserId == userId && a.EventId == eventId);
            _db.EventUsers.Remove(eventToDelete);
            return Save();
        }
        
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}