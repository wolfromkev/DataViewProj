using DataViewBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DataViewBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }
        public DbSet<ProductCommentData> ProductCommentData { get; set; }
        public DbSet<WeeklyYieldData> WeeklyYieldData { get; set; }
        public DbSet<UserData> UserData { get; set; }
        public DbSet<UpcomingProductData> UpcomingProductData { get; set; }
        public DbSet<ToolData> ToolData { get; set; }
        public DbSet<ProductData> ProductData { get; set; }
    }
}