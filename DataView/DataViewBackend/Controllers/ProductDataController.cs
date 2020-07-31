using System.Collections.Generic;
using AutoMapper;
using DataViewBackend.Models.Dto;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDataController : Controller
    {
        private IProductDataRepository _pdRepo;
        private readonly IMapper _mapper;
        public ProductDataController(IProductDataRepository pdRepo, IMapper mapper)
        {
            _pdRepo = pdRepo;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetProductDatas()
        {
            var objList = _pdRepo.GetProductDatas();
            var objDto = new List<ProductDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ProductDataDto>(obj));
            }
            return Ok(objDto);
        }
        [HttpGet("{productDataId:int}", Name="GetProductData")]
        public IActionResult GetProductData(int productDataId)
        {
            var obj = _pdRepo.GetProductData(productDataId);
            if (obj == null)
            {
                return NotFound();
            }
            var objDto = _mapper.Map<ProductDataDto>(obj);
            return Ok(objDto);
        }
    }
}