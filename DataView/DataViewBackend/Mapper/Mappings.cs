using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;

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
            CreateMap<EventTask, EventTaskDto>().ReverseMap();
            CreateMap<ToolDowntime, ToolDowntimeDto>().ReverseMap();
        }
    }
}