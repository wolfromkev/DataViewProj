using System.Collections;
using System.Collections.Generic;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Models.Dto.TaskDTOs;

namespace DataViewBackend.Repository.IRepository
{
    public interface ITaskRepository
    {
        ICollection<Task>GetTasks(int userId);
        Task GetTask(int taskId);
        bool TaskExists(int id);
        
        ICollection<Task> CreateTasks(TaskDto tasks);
        bool UpdateTask(UpdateTaskDto task);
        bool DeleteTask(int taskId);
        bool CompleteTask(IEnumerable<CompleteTaskDto> tasks);
    }
}