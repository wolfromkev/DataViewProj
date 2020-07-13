using System.Collections.Generic;
using AutoMapper;
using DataViewBackend.Models.Dto;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class GetOnlyDataController : Controller
    {
        private IGetOnlyDataRepository _goRepo;
        private readonly IMapper _mapper;
        
        public GetOnlyDataController(IGetOnlyDataRepository goRepo, IMapper mapper)
        {
            _goRepo = goRepo;
            _mapper = mapper;
        }
        
        [HttpGet("GetWeeklyYieldDatas")] 
        public IActionResult GetWeeklyYieldDatas()
        {
            var objList = _goRepo.GetWeeklyYieldDatas();
            var objDto = new List<WeeklyYieldDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<WeeklyYieldDataDto>(obj));
            }
            return Ok(objDto);
        }
        
        [HttpGet("GetUserDatas")] 
        public IActionResult GetUserDatas()
        {
            var objList = _goRepo.GetUserDatas();
            var objDto = new List<UserDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<UserDataDto>(obj));
            }
            return Ok(objDto);
        }
        
        [HttpGet("GetUpcomingProductData")] 
        public IActionResult GetUpcomingProductData()
        {
            var objList = _goRepo.GetUpcomingProductData();
            var objDto = new List<UpcomingProductDataDto>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<UpcomingProductDataDto>(obj));
            }
            return Ok(objDto);
        }
        
        [HttpGet("[action]/{userId:int}")] 
        public IActionResult GetUserData(int userId)
        {
            var obj = _goRepo.GetUserData(userId);
            if (obj == null)
            {
                return NotFound();
            }

            var objDto = _mapper.Map<UserDataDto>(obj);
            return Ok(objDto);
        }
    }
}







