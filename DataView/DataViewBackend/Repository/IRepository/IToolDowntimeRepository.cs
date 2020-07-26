using System.Collections.Generic;
using DataViewBackend.Models;

namespace DataViewBackend.Repository.IRepository
{
    public interface IToolDowntimeRepository
    {
        ICollection<ToolDowntime> ToolDowntime();
        bool ToolDowntimeExists(int id);
        ToolDowntime GetToolDowntime(int id);
        bool CreateToolDowntime(ToolDowntime toolDowntime);
        bool UpdateToolDowntime(ToolDowntime toolDowntime);
        bool DeleteToolDowntime(int toolDowntimeId, int userId);
    }
}