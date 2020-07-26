using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;

namespace DataViewBackend.Repository
{
    public class ToolDowntimeRepository : IToolDowntimeRepository
    {
        private readonly ApplicationDbContext _db;
        public ToolDowntimeRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public ICollection<ToolDowntime> ToolDowntime()
        {
            return _db.ToolDowntime.OrderBy(a => a.Id).ToList();
        }
        public ToolDowntime GetToolDowntime(int toolDowntimeId)
        {
            return _db.ToolDowntime.FirstOrDefault(a => a.Id == toolDowntimeId);
        }
        public bool ToolDowntimeExists(int id)
        {
            bool value = _db.ToolDowntime.Any(a => a.Id == id);
            return value;
        }
        public bool CreateToolDowntime(ToolDowntime toolDowntime)
        {
            _db.ToolDowntime.Add(toolDowntime);
            return Save();
        }
        public bool UpdateToolDowntime(ToolDowntime toolDowntime)
        {
            _db.ToolDowntime.Update(toolDowntime);
            return Save();
        }
        public bool DeleteToolDowntime(int toolDowntimeId, int userId)
        {
            var toolObj = GetToolDowntime(toolDowntimeId);
            _db.ToolDowntime.Remove(toolObj);
            return Save();
        }
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}