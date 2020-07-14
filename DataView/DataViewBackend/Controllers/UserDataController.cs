using DataViewBackend.Models;
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

        public UserDataController(IUserDataRepository userRepo)
        {
            _userRepo = userRepo;
        }
        [AllowAnonymous] //Overrides Authorize
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
    }
}