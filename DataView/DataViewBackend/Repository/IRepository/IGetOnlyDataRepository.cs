using System.Collections.Generic;
using DataViewBackend.Models;


namespace DataViewBackend.Repository.IRepository
{
    public interface IGetOnlyDataRepository
    {
        ICollection<WeeklyYieldData> GetWeeklyYieldDatas();
        
        ICollection<UserData> GetUserDatas();
        UserData GetUserData(int userId); 
        
        ICollection<UpcomingProductData> GetUpcomingProductData();
        
    }
}