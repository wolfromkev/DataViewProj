using AutoMapper;
using DataViewBackend.Repository;
using DataViewBackend.Repository.IRepository;
using DataViewBackend.Data;
using DataViewBackend.Mapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace DataViewBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IProductDataRepository, ProductDataRepository>(); 
            services.AddScoped<IToolDataRepository, ToolDataRepository>(); 
            services.AddScoped<IGetOnlyDataRepository, GetOnlyRepositoryData>(); 
            services.AddScoped<IProductCommentDataRepository, ProductCommentDataRepository>(); 
            services.AddAutoMapper(typeof(Mappings));
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("DataProjectAPI", new Microsoft.OpenApi.Models.OpenApiInfo()
                {
                    Title="Project Data",
                    Version = "1"
                });
            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/DataProjectAPI/swagger.json", "Project Data");
                options.RoutePrefix = "";
            });
            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}