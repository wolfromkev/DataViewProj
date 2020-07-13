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
    
    public class ToolDataController : Controller
    {
        private IToolDataRepository _tdRepo;
        private readonly IMapper _mapper;
        
        public ToolDataController(IToolDataRepository tdRepo, IMapper mapper)
        {
            _tdRepo = tdRepo;
            _mapper = mapper;
        }
       
        [HttpGet]
        public IActionResult GetToolDatas()
        {
            var objList = _tdRepo.GetToolDatas();
            var objDto = new List<ToolDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ToolDataDto>(obj));
            }
            return Ok(objDto);
        }

        [HttpGet("{toolDataId:int}", Name="GetToolData")] //Specifies this get req will take an argument. The Name part allows you to call the route in VS
        public IActionResult GetToolData(int toolDataId)
        {
            var obj = _tdRepo.GetToolData(toolDataId);
            if (obj == null)
            {
                return NotFound();
            }

            var objDto = _mapper.Map<ToolDataDto>(obj);
            return Ok(objDto);
        }
        
        [HttpPost]
        public IActionResult CreateToolData([FromBody] ToolDataDto toolDto) 
        {
            if (toolDto == null)
            {
                return BadRequest(ModelState); 
            }
            if (_tdRepo.ToolDataExists(toolDto.Id))
            {
                ModelState.AddModelError("","National Park Exists!");
                return StatusCode(404, ModelState);
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var toolObj = _mapper.Map<ToolData>(toolDto);
            if (!_tdRepo.CreateToolData(toolObj))
            {
                ModelState.AddModelError("",$"Something went wrong when saving the record.");
                return StatusCode(500, ModelState);
            }
            return CreatedAtRoute("GetToolData", new { toolDataId = toolObj.Id}, toolObj);
        }
        

        [HttpPatch("{toolDataId:int}", Name="UpdateToolData")]
        public IActionResult UpdateToolData(int toolDataId, [FromBody] ToolDataDto toolDto)
        {
            if (toolDto == null || toolDataId != toolDto.Id)
            {
                return BadRequest(ModelState); //Modelstate contains all of the errors encounters. 
            }
            var toolObj = _mapper.Map<ToolData>(toolDto);
            if (!_tdRepo.UpdateToolData(toolObj))
            {
                ModelState.AddModelError("",$"Something went wrong when updating the record.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
        
        
        [HttpDelete("{toolDataId:int}", Name="DeleteToolData")]
        public IActionResult DeleteToolData(int toolDataId)
        {
            if (!_tdRepo.ToolDataExists(toolDataId))
            {
                return NotFound();
            }
            var toolObj = _tdRepo.GetToolData(toolDataId);
            if (!_tdRepo.DeleteToolData(toolObj))
            {
                ModelState.AddModelError("",$"Something went wrong when deleting the record.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}