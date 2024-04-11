using Microsoft.AspNetCore.Authentication.BearerToken;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services
        .AddAuthentication()
        .AddBearerToken();
builder.Services.AddAuthorization();
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.MapGet("/login", (string username) =>
{
    var claimsPrincipal = new ClaimsPrincipal(
      new ClaimsIdentity(
        new[] { new Claim(ClaimTypes.Name, username) },
            BearerTokenDefaults.AuthenticationScheme
      )
    );
    return Results.SignIn(claimsPrincipal);
});
app.MapGet("/user", (ClaimsPrincipal user) =>
{
#pragma warning disable CS8602 // Desreferência de uma referência possivelmente nula.
    return Results.Ok($"Bem-Vindo {user.Identity.Name}!");
#pragma warning restore CS8602 // Desreferência de uma referência possivelmente nula.
})
.RequireAuthorization();
app.Run();