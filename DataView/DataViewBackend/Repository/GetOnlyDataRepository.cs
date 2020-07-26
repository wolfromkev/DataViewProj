using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;


namespace DataViewBackend.Repository
{

    public class GetOnlyRepositoryData : IGetOnlyDataRepository
    {
        private readonly ApplicationDbContext _db;
        public GetOnlyRepositoryData(ApplicationDbContext db)
        {
            _db = db;
        }
        public ICollection<WeeklyYieldData> GetWeeklyYieldDatas()
        {
            return _db.WeeklyYieldData.OrderBy(a => a.Id).ToList();
        }
        public ICollection<UserData> GetUserDatas()
        {
            return _db.UserData.OrderBy(a => a.Id).ToList();
        }
        public UserData GetUserData(int userId)
        {
            return _db.UserData.FirstOrDefault(a => a.Id == userId);
        }
        public ICollection<UpcomingProductData> GetUpcomingProductData()
        {
            return _db.UpcomingProductData.OrderBy(a => a.Id).ToList();
        }
    }
}