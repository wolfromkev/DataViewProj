using System.Collections.Generic;
using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ToolDowntimeController : Controller
    {
        private IToolDowntimeRepository _tdRepo;
        private readonly IMapper _mapper;
        
        public ToolDowntimeController(IToolDowntimeRepository tdRepo, IMapper mapper)
        {
            _tdRepo = tdRepo;
            _mapper = mapper;
        }
        
        [HttpGet("[action]")] 
        public IActionResult ToolDowntime()
        {
            var objList = _tdRepo.ToolDowntime();
            var objDto = new List<ToolDowntimeDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ToolDowntimeDto>(obj));
            }
            return Ok(objDto);
        }
        
        [HttpPost("[action]")]
        public IActionResult CreateToolDowntime([FromBody] ToolDowntime toolDowntime)
        {
            if (toolDowntime == null)
            {
                return BadRequest(ModelState);
            }
            if (!_tdRepo.CreateToolDowntime(toolDowntime))
            {
                ModelState.AddModelError("", $"Something went wrong when creating event.");
                return StatusCode(500, ModelState);
            }
            //var obj = _tdRepo.CreateToolDowntime(toolDowntime);
            return NoContent();
        }
        
        [HttpPatch("[action]")]
        public IActionResult UpdateToolDowntime( int toolObjId,int userId, [FromBody] ToolDowntime toolDowntime)
        {
            if (toolDowntime == null || userId != toolDowntime.AssignerId || toolObjId !=  toolDowntime.Id)
            {
                return BadRequest(ModelState);
            }
            var toolObj = _mapper.Map<ToolDowntime>(toolDowntime);
            if (!_tdRepo.UpdateToolDowntime(toolObj))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        
        [HttpDelete("[action]")]
        public IActionResult DeleteToolDowntime(int toolDowntimeId, int userId)
        {
            if (!_tdRepo.ToolDowntimeExists(toolDowntimeId))
            {
                return NotFound();
            }
            var eventObj = _tdRepo.GetToolDowntime(toolDowntimeId);
            if (eventObj.AssignerId != userId)
            {
                ModelState.AddModelError("", $"You are not authorized to delete this task");
                return StatusCode(401, ModelState);
            }
            if (!_tdRepo.DeleteToolDowntime(toolDowntimeId, userId))
            {
                ModelState.AddModelError("", $"Something went wrong when deleting the task");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}