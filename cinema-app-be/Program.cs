var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/get-all-movies", () => "Hello World!");

app.Run();
