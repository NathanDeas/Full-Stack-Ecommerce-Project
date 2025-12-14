using EcommerceAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();

/// Add OpenAPI/Swagger services
builder.Services.AddOpenApi();

// Add controllers
builder.Services.AddControllers();

// Configure CORS to allow requests from React app
builder.Services.AddCors(options =>
{
    
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            // Update the origins to match your React app's URL and port
            policy.WithOrigins("http://localhost:5173", "http://localhost:3000") 
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


// Configure DbContext with SQLite
var connectionString = builder.Configuration.GetConnectionString("products") 
                       ?? "Data Source=products.db";

// Register the DbContext with the service container
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

// Build the app
var app = builder.Build();


// use OpenAPI/Swagger only in Development environment
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    // Configure Swagger UI
    app.UseSwaggerUi(options =>
    {
        options.DocumentPath = "/openapi/v1.json";
    });
}

// Use CORS
app.UseCors("AllowReactApp");
// app.UseHttpsRedirection();
app.UseAuthorization();
// Map controllers
app.MapControllers();
// Run the application
app.Run();

