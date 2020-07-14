using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace DataViewBackend.Repository
{
    public class UserDataRepository : IUserDataRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly AppSettings _appSettings;

        public UserDataRepository(ApplicationDbContext db, IOptions<AppSettings> appsettings)
        {
            _appSettings = appsettings.Value;
            _db = db;

        }
        
        public bool IsUniqueUser(string emailAddress)
        {
            var user = _db.UserData.SingleOrDefault(x => x.Email == emailAddress);
            if (user == null)
            {
                return true; //User ID is unique if user is null.
            }

            return false; //User ID would already exist in this case.
        }

        public UserData Authenticate(string emailAddress, string password)
        {
            var user = _db.UserData.SingleOrDefault(x => x.Email == emailAddress && x.Password == password);
            if (user == null)
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()), 
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature )
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);
            return user;
        }

        public UserData Register(string emailAddress, string password, string firstName, string lastName)
        {
            UserData userObj = new UserData()
            {
                Email = emailAddress,
                Password = password,
                FirstName = firstName,
                LastName = lastName,
            };
            _db.UserData.Add(userObj);
            _db.SaveChanges();
            userObj.Password = "";
            return userObj;
        }
    }
}