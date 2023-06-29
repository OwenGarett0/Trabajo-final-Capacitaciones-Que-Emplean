using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;
using System.Data;

namespace Backend
{
    [ApiController]
    [Route("api/answers")]
    public class AnswerController : ControllerBase
    {
        private readonly MySqlConnection connection;

        public AnswerController()
        {
            string connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";
            connection = new MySqlConnection(connectionString);
        }

        [HttpGet]
        public async Task<IActionResult> GetAnswer(int threadId)
        {
            try
            {
                var query = "SELECT * FROM answers";
                var command = new MySqlCommand(query, connection);
                var answers = new List<Answer>();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        var answer = new Answer
                        {
                            id = reader.GetInt32("id"),
                            idOP = reader.GetInt32("idOp"),
                            Answ = reader.GetString("Answ"),
                        };

                        answers.Add(answer);
                    }

                }

                return Ok(answers);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> NewAnswer(Answer respuesta)
        {
            var insertQuery = "INSERT INTO respuestas (threadId, usuarioId, contenido) VALUES (@ThreadId, @UsuarioId, @Contenido)";
            await connection.ExecuteAsync(insertQuery, respuesta);
            return Ok();
        }

    }
}
