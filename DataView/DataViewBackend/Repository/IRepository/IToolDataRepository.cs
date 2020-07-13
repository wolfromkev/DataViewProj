using System.Collections.Generic;
using DataViewBackend.Models;


namespace DataViewBackend.Repository.IRepository
{
    public interface IToolDataRepository
    {
        ICollection<ToolData> GetToolDatas();
        ToolData GetToolData(int toolDataId);
        bool ToolDataExists(string name);
        bool ToolDataExists(int id);
        bool CreateToolData(ToolData toolData);
        bool UpdateToolData(ToolData toolData);
        bool DeleteToolData(ToolData toolData);
        bool Save();
    }
}