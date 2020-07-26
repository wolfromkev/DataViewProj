using System.Collections.Generic;
using DataViewBackend.Models;

namespace DataViewBackend.Repository.IRepository
{
    public interface IUserDataRepository
    {
        bool IsUniqueUser(string emailAddress);
        UserData Authenticate(string emailAddress, string password);
        UserData Register(string emailAddress, string password, string firstName, string lastName);
        ICollection<UserData> GetAllUserData();
        ICollection<UserData> SearchUserData(string query);
        UserData GetUserData(int userId);
    }
} 