using DataViewBackend.Models;
using DataViewBackend.Models.JoinTables;
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
        public DbSet<Task> Task { get; set; }
        public DbSet<Event> Event { get; set; }
        
        public DbSet<EventUsers> EventUsers { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventUsers>()
                .HasKey(c => new { c.UserId, c.EventId });
            
        }
        
    }
    
}