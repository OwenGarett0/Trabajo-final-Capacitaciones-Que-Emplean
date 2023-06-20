using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace Backend
{
    [ApiController]
    [Route("api/auth")]
    public class ComprobarUsuario: ControllerBase
    {
        private readonly MySqlConnection _connection;

        public ComprobarUsuario(IConfiguration configuration)
        {
            string connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";
            _connection = new MySqlConnection(connectionString);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Usuarios usuarios)
        {
            var insertQuery = "INSERT INTO usuarios (usuarios, pass, correo) VALUES (@usuarios, @pass, @email)";
            await _connection.ExecuteAsync(insertQuery, usuarios);
            return Ok();
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(Usuarios usuarios)
        {
            var selectQuery = "SELECT * FROM usuarios WHERE usuarios = @usuarios AND pass = @pass";
            var existingUser = await _connection.QueryFirstOrDefaultAsync<Usuarios>(selectQuery, usuarios);

            if (existingUser == null)
            {
                return Unauthorized();
            }

            return Ok(existingUser);
        }
    }
}