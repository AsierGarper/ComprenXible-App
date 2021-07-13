using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using comprenXible_API.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using comprenXible_API.Authentication_;
using comprenXible_API.ExtensionMethods;
using MailKit.Net.Smtp;
using MimeKit;
using comprenXible_API.Models;
using comprenXible_API.Services;

namespace comprenXible_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        //This is for setting the CORS allowed origins
        readonly string CorsOrigins = "_corsOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            //Swagger -- this will be removed at some point
            //services.AddSwaggerGen(c =>
            //{
            //    c.SwaggerDoc("v1", new OpenApiInfo { Title = "comprenXible_API", Version = "v1" });
            //});

            //This is for adding the CORS policy
            services.AddCors(options =>
            {
                options.AddPolicy(name: CorsOrigins,
                                  builder =>
                                  {
                                      //By now the CORS policy is - open for everybody -
                                      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                                  });
            });

            //NOTE: I changed this line's "configuration" to uppercase "Configuration" -- I don't know what will happen
            IConfigurationSection settingsSection = Configuration.GetSection("AppSettings");
            AppSettings settings = settingsSection.Get<AppSettings>();
            byte[] signingKey = System.Text.Encoding.UTF8.GetBytes(settings.EncryptionKey);

            //This is here for adding the cors controllers
            services.AddControllers();

            //This adds the Auth service to the App container.
            //An extension AddAuthentication method have been created
            services.AddAuthentication(signingKey);

            //Services configured for the dependency injection
            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("ApplicationDbContext")));
            services.Configure<AppSettings>(settingsSection);
            services.AddTransient<Auth>();
            services.AddTransient<UserService>();
            services.AddTransient<TokenService>();
            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<ITestService, TestService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseSwagger();
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "comprenXible_API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            //I added this fot authentication
            app.UseAuthentication();

            //& this guy enables the CORS policy created before
            app.UseCors(CorsOrigins);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
       
    }
}
