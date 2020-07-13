using AutoMapper;
using DataViewBackend.Models;
using DataViewBackend.Models.Dto;

namespace DataViewBackend.Mapper
{
    public class Mappings : Profile
    {
        public Mappings()
        {
            CreateMap<ProductCommentData, ProductCommentDataDto>().ReverseMap();
            CreateMap<ToolData, ToolDataDto>().ReverseMap();
            CreateMap<UpcomingProductData, UpcomingProductDataDto>().ReverseMap();
            CreateMap<WeeklyYieldData, WeeklyYieldDataDto>().ReverseMap();
            CreateMap<UserData, UserDataDto>().ReverseMap();
            CreateMap<ProductData, ProductDataDto>().ReverseMap();
        }
    }
}