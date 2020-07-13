using DataViewBackend.Models;

namespace DataViewBackend.Repository.IRepository
{
    public interface IUserDataRepository
    {
        bool IsUniqueUser(string emailAddress);
        UserData Authenticate(string emailAddress, string password);
        UserData Register(string emailAddress, string password);
    }
} 