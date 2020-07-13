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
    
    public class ProductCommentDataController : Controller
    {
        private IProductCommentDataRepository _pcdRepo;
        private readonly IMapper _mapper;
        
        public ProductCommentDataController(IProductCommentDataRepository pcdRepo, IMapper mapper)
        {
            _pcdRepo = pcdRepo;
            _mapper = mapper;
        }
        
        [HttpGet]
        public IActionResult GetProductComments()
        {
            var objList = _pcdRepo.GetProductComments();
            var objDto = new List<ProductCommentDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ProductCommentDataDto>(obj));
            }
            return Ok(objDto);
        }

        [HttpGet("{productCommentId:int}", Name="GetProductComment")] 
        public IActionResult GetProductComment(int productCommentId)
        {
            var obj = _pcdRepo.GetProductComment(productCommentId);
            if (obj == null)
            {
                return NotFound();
            }

            var objDto = _mapper.Map<ProductCommentDataDto>(obj);
            return Ok(objDto);
        }
        
        [HttpPost]
        public IActionResult CreateProductComment([FromBody] ProductCommentDataDto commentDto) 
        {
            if (commentDto == null)
            {
                return BadRequest(ModelState); 
            }
            if (_pcdRepo.ProductCommentExists(commentDto.Id))
            {
                ModelState.AddModelError("","National Park Exists!");
                return StatusCode(404, ModelState);
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var commentObj = _mapper.Map<ProductCommentData>(commentDto);
            if (!_pcdRepo.CreateProductComment(commentObj))
            {
                ModelState.AddModelError("",$"Something went wrong when saving the record.");
                return StatusCode(500, ModelState);
            }
            return CreatedAtRoute("GetProductComment", new { productCommentId = commentObj.Id}, commentObj);
        }
        

        [HttpPatch("{productCommentId:int}", Name="UpdateProductComment")]
        public IActionResult UpdateProductComment(int productCommentId, [FromBody] ProductCommentDataDto commentDto)
        {
            if (commentDto == null || productCommentId != commentDto.Id)
            {
                return BadRequest(ModelState); //Modelstate contains all of the errors encounters. 
            }
            var commentObj = _mapper.Map<ProductCommentData>(commentDto);
            if (!_pcdRepo.UpdateProductComment(commentObj))
            {
                ModelState.AddModelError("",$"Something went wrong when updating the record.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
        
        
        [HttpDelete("{productCommentId:int}", Name="DeleteProductComment")]
        public IActionResult DeleteProductComment(int productCommentId)
        {
            if (!_pcdRepo.ProductCommentExists(productCommentId))
            {
                return NotFound();
            }
            var commentObj = _pcdRepo.GetProductComment(productCommentId);
            if (!_pcdRepo.DeleteProductComment(commentObj))
            {
                ModelState.AddModelError("",$"Something went wrong when deleting the record.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
       
    }
}