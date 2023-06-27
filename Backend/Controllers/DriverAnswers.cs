using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace Backend
{
    [ApiController]
    [Route("api/answers")]
    public class Answers : ControllerBase
    {
        private readonly MySqlConnection connection;

        public RespuestasController(IConfiguration configuration)
        {
            string connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";
            connection = new MySqlConnection(connectionString);
        }

        [HttpGet]
        public async Task<IActionResult> GetAnswer(int threadId)
        {
        try{
            var query = "SELECT * FROM answers";
            var command = (query, connection)
            var threads = new List<Answer>();
            using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var answer = new Answer
                            {
                                Id = reader.GetInt32("id"),
                                idOp = reader.GetInt32("idOp"),
                                Answ = reader.GetString("Answ"),
                            };

                            Answers.Add(answer);
                        }
                    }

                    return Ok(Answers);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult>NewAnswer(Respuesta respuesta)
        {
            var insertQuery = "INSERT INTO respuestas (threadId, usuarioId, contenido) VALUES (@ThreadId, @UsuarioId, @Contenido)";
            await _connection.ExecuteAsync(insertQuery, respuesta);
            return Ok();
        }

        // Implementa los demás métodos para actualizar y eliminar respuestas

}
