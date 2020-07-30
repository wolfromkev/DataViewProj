using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using DataViewBackend.Models.Dto.TaskDTOs;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    
    public class TaskController : Controller
    {
        private ITaskRepository _etRepo;
        private readonly IMapper _mapper;
        
        public TaskController(ITaskRepository etRepo, IMapper mapper)
        {
            _etRepo = etRepo;
            _mapper = mapper;
        }
        
        [HttpGet("[action]/{userId:int}")] 
        public IActionResult GetTasks(int userId)
        {
            var objList = _etRepo.GetTasks(userId).ToList();
            return Ok(objList);
        }

        [HttpPost("[action]")]
        public IActionResult CreateTasks([FromBody] TaskDto tasks)
        {
            if (!_etRepo.CreateTasks(tasks))
            {
                ModelState.AddModelError("", $"Something went wrong when creating the task.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpPatch("[action]")]
        public IActionResult UpdateTask([FromBody] UpdateTaskDto task)
        {
            if (!_etRepo.UpdateTask(task))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpPatch("[action]")]
        public IActionResult CompleteTask([FromBody] IEnumerable<CompleteTaskDto>  tasks)
        {
            if (!_etRepo.CompleteTask(tasks))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpDelete("[action]/{taskId:int}")]
        public IActionResult DeleteTask(int taskId)
        {
            if (!_etRepo.TaskExists(taskId))
            {
                return NotFound();
            }
            if (!_etRepo.DeleteTask(taskId))
            {
                ModelState.AddModelError("", $"Something went wrong when deleting the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}