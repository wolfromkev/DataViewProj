using System.Linq;
using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class EventTaskController : Controller
    {
        private IEventTaskRepository _etRepo;
        private readonly IMapper _mapper;
        
        public EventTaskController(IEventTaskRepository etRepo, IMapper mapper)
        {
            _etRepo = etRepo;
            _mapper = mapper;
        }
        
        [HttpGet("[action]/{userId:int}")] 
        public IActionResult GetEventTasks(int userId)
        {
            var objList = _etRepo.GetEventTasks(userId).ToList();
            return Ok(objList);
        }
        
        [HttpPost("[action]")]
        public IActionResult CreateEventTask([FromBody] EventTask eventTask)
        {
            if (eventTask == null)
            {
                return BadRequest(ModelState);
            }
            if (!_etRepo.CreateEventTask(eventTask))
            {
                ModelState.AddModelError("", $"Something went wrong when creating the task.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpPatch("[action]")]
        public IActionResult UpdateEventTask(int eventId, int userId, [FromBody] EventTask eventTask)
        {
            if (eventTask == null || userId!=eventTask.AssignerId || eventId !=  eventTask.Id)
            {
                return BadRequest(ModelState);
            }
            if (!_etRepo.UpdateEventTask(eventTask))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpDelete("[action]")]
        public IActionResult DeleteEventTask(int eventTaskId)
        {
            if (!_etRepo.EventTaskExists(eventTaskId))
            {
                return NotFound();
            }
            var eventTaskObj = _etRepo.GetEventTask(eventTaskId);
            if (!_etRepo.DeleteEventTask(eventTaskObj))
            {
                ModelState.AddModelError("", $"Something went wrong when deleting the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        
    }
}