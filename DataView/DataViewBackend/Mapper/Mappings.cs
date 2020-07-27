using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;
using DataViewBackend.Models.Dto.EventDto;
using DataViewBackend.Models.Dto.TaskDTOs;
using DataViewBackend.Models.Dto.UserDto;

namespace DataViewBackend.Mapper
{
    public class Mappings : Profile
    {
        public Mappings()
        {
            CreateMap<UpcomingProductData, UpcomingProductDataDto>().ReverseMap();
            CreateMap<WeeklyYieldData, WeeklyYieldDataDto>().ReverseMap();
            CreateMap<ProductData, ProductDataDto>().ReverseMap();
            
            CreateMap<UserData, UserDataDto>().ReverseMap();
            
            CreateMap<Task, TaskDto>().ReverseMap();
            CreateMap<Task, UpdateTaskDto>().ReverseMap();
            CreateMap<Task, DeleteTaskDto>().ReverseMap();
            
            CreateMap<Event, EventDto>().ReverseMap();
            CreateMap<Event, CreateEventDto>().ReverseMap();
            CreateMap<Event, UpdateEventDto>().ReverseMap();
        }
    }
}