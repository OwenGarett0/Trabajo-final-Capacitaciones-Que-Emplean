using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;
using System.Threading.Tasks;
namespace Backend
{
    [ApiController]
    [Route("api/stats")]
    public class EstadisticasController: ControllerBase
    {
        private readonly string _connectionString;

        public EstadisticasController()
        {
            _connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";

        }
        [HttpPost("logs")]
        public async Task<IActionResult> IncrementarLogueos()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET loginCount = loginCount + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpPost("login")]
        public async Task<IActionResult> IncrementarVisitasLogin()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET visitasLogin = visitasLogin + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpPost("register")]
        public async Task<IActionResult> IncrementarVisitasRegister()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET visitasRegister = visitasRegister + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpPost("aboutus")]
        public async Task<IActionResult> IncrementarVisitasAboutus()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET visitasAboutus = visitasAboutus + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpPost("foro")]
        public async Task<IActionResult> IncrementarVisitasForo()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET visitasForo = visitasForo + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpPost("stats")]
        public async Task<IActionResult> IncrementarVisitasStats()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE estadisticas SET visitasStats = visitasStats + 1";
                    var command = new MySqlCommand(query, connection);
                    await connection.ExecuteAsync(query);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [HttpGet]
        public Stats ObtenerEstadisticas()
        {
        
            Stats estadisticas = null;
            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (var command = new MySqlCommand("SELECT loginCount, visitasLogin, visitasRegister, visitasAboutus, visitasForo, visitasStats FROM estadisticas", connection))
                using (var reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        estadisticas = new Stats
                        {
                            loginCount = reader.GetInt32("loginCount"),
                            visitasLogin = reader.GetInt32("visitasLogin"),
                            visitasRegister = reader.GetInt32("visitasRegister"),
                            visitasAboutus = reader.GetInt32("visitasAboutus"),
                            visitasForo = reader.GetInt32("visitasForo"),
                            visitasStats = reader.GetInt32("visitasStats")
                        };
                    }
                }
            }
            return estadisticas;
        }
    }
}