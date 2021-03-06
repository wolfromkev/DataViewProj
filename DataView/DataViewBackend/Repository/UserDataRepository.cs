using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Models.Dto.UserDto;
using DataViewBackend.Repository.IRepository;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace DataViewBackend.Repository
{
    public class UserDataRepository : IUserDataRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly AppSettings _appSettings;
        private readonly IMapper _mapper;
        
        public UserDataRepository(ApplicationDbContext db, IOptions<AppSettings> appsettings, IMapper mapper)
        {
            _mapper = mapper;
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
            
            var user = _db.UserData.SingleOrDefault(x => x.Email == emailAddress && x.Password == password);
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
        
        public ICollection<UserData> GetAllUserData()
        {
            return _db.UserData.OrderBy(a => a.LastName).ToList();
        }

        public ICollection<UserData> SearchUserData(string query)
        {
            return _db.UserData.Where(a => (a.FirstName +" " + a.LastName).Contains(query)).ToList();
        }

        public UserData GetUserData(int userId)
        {
            return _db.UserData.FirstOrDefault(a => a.Id == userId);
        }

        public bool UpdateUserData(UpdateUserDataDto userData)
        {
            var returnObj = GetUserData(userData.Id);
            returnObj.Role = userData.Role;
            returnObj.UserDescription = userData.UserDescription;
            _db.UserData.Update(returnObj);
            return Save();
        }

        public bool UpdateUserImage(UpdateUserImageDto userData)
        {
            var returnObj = GetUserData(userData.Id);
            returnObj.Image = userData.Image;
            _db.UserData.Update(returnObj);
            return Save();
        }
        
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}