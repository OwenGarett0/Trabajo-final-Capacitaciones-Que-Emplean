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
            string connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";//Conexión base de datos
            _connection = new MySqlConnection(connectionString);
        }

        [HttpPost("register")]//Función de registro
        public async Task<IActionResult> Register(Register user)
        {
            var insertQuery = "INSERT INTO usuarios (usuarios, pass, correo) VALUES (@user, @pass, @email)";//Consulta SQL para INGRESAR
            await _connection.ExecuteAsync(insertQuery, user);
            return Ok();
        }
        [HttpPost("login")]//Función de login
        public async Task<IActionResult> Login(Login user)
        {
            var selectQuery = "SELECT * FROM usuarios WHERE usuarios = @user AND pass = @pass";//Consulta SQL comprobar Usuario y Contraseña
            var existingUser = await _connection.QueryFirstOrDefaultAsync<Login>(selectQuery, user);

            if (existingUser == null)
            {
                return Unauthorized();
            }

            return Ok(existingUser);
        }
    }
}