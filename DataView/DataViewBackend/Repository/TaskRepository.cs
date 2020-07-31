using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using DataViewBackend.Data;
using DataViewBackend.Models.Dto.TaskDTOs;
using DataViewBackend.Repository.IRepository;
using Task = DataViewBackend.Models.Task;


namespace DataViewBackend.Repository
{
    public class TaskRepository : ITaskRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;

        public TaskRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        public ICollection<Task> GetTasks(int userId) //Fix
        {
            return _db.Task.Where(a => a.AssigneeId == userId ||  a.AssignerId == userId ).ToList();
        }
        public bool TaskExists(int id)
        {
            bool value = _db.Task.Any(a => a.Id == id);
            return value;
        }

        public ICollection<Task> CreateTasks(TaskDto tasks) //Fix
        {
            var returnTasks = new List<Task>();
            foreach (int assigneeId in tasks.Users)
            {
                var userFullname = _db.UserData.FirstOrDefault(a => a.Id == assigneeId);
                
                Task eventObj = new Task()
                {
                    Title = tasks.Title,
                    AssignerId = tasks.AssignerId,
                    AssignerName = tasks.AssignerName,
                    AssigneeId = assigneeId,
                    AssigneeName = userFullname.FullName,
                    Description = tasks.Description,
                    Start = tasks.Start,
                    End = tasks.End,
                };
                _db.Task.Add(eventObj);
                Save();
                returnTasks.Add(eventObj);
                
            }
    
            return returnTasks;
        }
        public bool UpdateTask(UpdateTaskDto task) //Fix
        {
            var taskObj = GetTask(task.Id);
            taskObj.Description = task.Description;
            taskObj.End = task.End;
            
            _db.Task.Update(taskObj);
            return Save();
        }
        public bool DeleteTask(int taskId) 
        {
            var taskObj = GetTask(taskId);
            _db.Task.Remove(taskObj);
            return Save();
        }

        public bool CompleteTask(IEnumerable<CompleteTaskDto> tasks)
        {
            foreach (var task in tasks)
            {
                var taskObj = GetTask(task.taskId);
                taskObj.Completed = task.status;
                _db.Task.Update(taskObj);
            }
            return Save();
        }

        public Task GetTask(int taskId) //Fix
        {
            return _db.Task.FirstOrDefault(a => a.Id == taskId);
        }
        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}