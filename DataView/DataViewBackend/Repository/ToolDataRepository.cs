using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;

namespace DataViewBackend.Repository
{
    public class ToolDataRepository : IToolDataRepository
    {
        private readonly ApplicationDbContext _db;

        public ToolDataRepository(ApplicationDbContext db)
        {
            _db = db;

        }
        public ICollection<ToolData> GetToolDatas()
        {
            return _db.ToolData.OrderBy(a => a.Id).ToList();
        }

        public ToolData GetToolData(int toolDataId)
        {
            return _db.ToolData.FirstOrDefault(a => a.Id == toolDataId);
        }
        
        public bool CreateToolData(ToolData toolData)
        {
            _db.ToolData.Add(toolData);
            return Save();
        }

        public bool DeleteToolData(ToolData toolData)
        {
            _db.ToolData.Remove(toolData);
            return Save();
        }

        public bool UpdateToolData(ToolData toolData)
        {
            _db.ToolData.Update(toolData);
            return Save();
        }
        
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
        
        public bool ToolDataExists(int id) 
        {
            bool value = _db.ToolData.Any(a => a.Id == id);
            return value;
        }
        
        public bool ToolDataExists(string name)
        {
            bool value = _db.ToolData.Any(a => a.ToolName.ToLower().Trim() == name.ToLower().Trim());
            return value;
        }
        
    }
}