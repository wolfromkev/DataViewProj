using System.Collections.Generic;
using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto.UserDto;
using DataViewBackend.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DataViewBackend.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserDataController : Controller
    {
        private readonly IUserDataRepository _userRepo;
        private readonly IMapper _mapper;

        public UserDataController(IUserDataRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
            
        }
        [AllowAnonymous] 
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserData model)
        {
            var user = _userRepo.Authenticate(model.Email, model.Password);
            if (user == null)
            {
                return BadRequest(new {message = "Email address or password is incorrect"});
            }

            return Ok(user);
        }

        [AllowAnonymous] 
        [HttpPost("register")]
        public IActionResult Register([FromBody] UserData model)
        {
            bool ifUserNameUnique = _userRepo.IsUniqueUser(model.Email);
            if (!ifUserNameUnique)
            {
                return BadRequest(new {message = "Email address already exists"});
            }

            var user = _userRepo.Register(model.Email, model.Password, model.FirstName, model.LastName);
            if (user == null)
            {
                return BadRequest(new {message = "Error while registering user"});
            }

            return Ok(user);
        }
        
        [AllowAnonymous] 
        [HttpGet("[action]/{query}")]
        public IActionResult SearchUserData(string query)
        {
            var objDto = new List<UserDataDto>();
            var userList = _userRepo.SearchUserData(query);
            foreach (var obj in userList)
            {
                objDto.Add( _mapper.Map<UserDataDto>(obj));
            }
            return Ok(objDto);
        }
        [AllowAnonymous] 
        [HttpPatch("[action]")]
        public IActionResult UpdateUserData([FromBody] UpdateUserDataDto userData)
        {
            if (!_userRepo.UpdateUserData(userData))
            {
                ModelState.AddModelError("", $"Something went wrong when updating your information");
                return StatusCode(500, ModelState);
            }
            return Ok(userData);
        }
        [AllowAnonymous] 
        [HttpPatch("[action]")]
        public IActionResult UpdateUserImage([FromBody] UpdateUserImageDto userData)
        {
            if (!_userRepo.UpdateUserImage(userData))
            {
                ModelState.AddModelError("", $"Something went wrong when updating your image");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}