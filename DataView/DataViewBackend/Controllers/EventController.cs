using System.Linq;
using AutoMapper;
using DataViewBackend.Models.Dto.EventDto;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class EventController : Controller
    {
        private IEventRepository _evRepo;
        private readonly IMapper _mapper;
        
        public EventController(IEventRepository evRepo, IMapper mapper)
        {
            _evRepo = evRepo;
            _mapper = mapper;
        }
        
        [HttpGet("[action]/{userId:int}")] 
        public IActionResult GetEvents(int userId)
        {
            var objList = _evRepo.GetEvents(userId).ToList();
            return Ok(objList);
        }

        [HttpPost("[action]")]
        public IActionResult CreateEvent([FromBody] CreateEventDto eventObj)
        {
            if (eventObj == null)
            {
                return BadRequest(ModelState);
            }
            var objList = _evRepo.CreateEvent(eventObj);
            return Ok(objList);
        }
        
        [HttpPatch("[action]/{userId:int}")]
        public IActionResult UpdateEvent(int userId, [FromBody] UpdateEventDto eventObj)
        {
            if (eventObj == null || userId!=eventObj.AssignerId)
            {
                ModelState.AddModelError("", "Unauthorized!");
                return StatusCode(404, ModelState);
            }
            
            if (!_evRepo.UpdateEvent(userId, eventObj))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the event");
                return StatusCode(500, ModelState);
            }
            return Ok(eventObj);
        }
        
        [HttpDelete("[action]/{eventId:int}+{userId:int}")]
        public IActionResult DeleteEvent(int eventId, int userId)
        {
            if (!_evRepo.EventExists(eventId))
            {
                return NotFound();
            }
            
            if (!_evRepo.DeleteEvent(eventId,userId))
            {
                ModelState.AddModelError("", $"Something went wrong when deleting the event");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}