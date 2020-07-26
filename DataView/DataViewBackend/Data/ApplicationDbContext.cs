using DataViewBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DataViewBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<WeeklyYieldData> WeeklyYieldData { get; set; }
        public DbSet<UserData> UserData { get; set; }
        public DbSet<UpcomingProductData> UpcomingProductData { get; set; }
        public DbSet<ProductData> ProductData { get; set; }
        public DbSet<EventTask> EventTask { get; set; }
        public DbSet<ToolDowntime> ToolDowntime { get; set; }
        
    }
    
}