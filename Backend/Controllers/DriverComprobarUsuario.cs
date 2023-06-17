using Backend;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly MySqlConnection _connection;

    public AuthController(IConfiguration configuration)
    {
        _connection = new MySqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    // Endpoint para registrar un nuevo usuario
    [HttpPost("registrar")]
    public async Task<IActionResult> Register(Usuarios user)
    {
        var insertQuery = "INSERT INTO Users (Username, Password, Email) VALUES (@Username, @Password, @Email)";
        await _connection.ExecuteAsync(insertQuery, user);
        return Ok();
    }

    // Endpoint para autenticar a un usuario existente
    [HttpPost("loguear")]
    public async Task<IActionResult> Login(Usuarios user)
    {
        var selectQuery = "SELECT * FROM Users WHERE Username = @Username AND Password = @Password";
        var existingUser = await _connection.QuerySingleOrDefaultAsync< Usuarios>(selectQuery, user);

        if (existingUser == null)
        {
            return Unauthorized();
        }

        return Ok(existingUser);
    }
}