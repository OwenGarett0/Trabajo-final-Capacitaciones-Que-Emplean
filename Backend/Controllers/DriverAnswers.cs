using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;
using System.Data;
using System.Configuration;

namespace Backend
{
    [ApiController]
    [Route("api/answers")]
    public class AnswerController : ControllerBase
    {
        private readonly string connectionString;

        public AnswerController()
        {
            connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";

        }

        [HttpGet]
        public async Task<IActionResult> GetAnswers()
        {
            try
            {
                using (var connection = new MySqlConnection(connectionString))
                {
                    await connection.OpenAsync();

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
                                idOp = reader.GetInt32("idOp"),
                                answ = reader.GetString("Answ"),
                            };

                            answers.Add(answer);
                        }

                    }

                    return Ok(answers);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswer(int id)
        {
            try
            {
                using (var connection = new MySqlConnection(connectionString))
                {
                    await connection.OpenAsync();

                    var query = "SELECT * FROM answers WHERE idOp = @id";
                    var command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@id", id);
                    var answers = new List<Answer>(); // Lista de respuestas
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var answer = new Answer
                            {
                                id = reader.GetInt32("id"),
                                idOp = reader.GetInt32("idOp"),
                                answ = reader.GetString("Answ"),
                            };

                            answers.Add(answer); // Agregar respuesta a la lista
                        }
                    }

                    return Ok(answers.ToArray()); // Devolver la lista de respuestas como array
                }
            }
            catch (MySqlException ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> NewAnswer(Answer respuesta)
        {
            using (var connection = new MySqlConnection(connectionString))
            {
                var insertQuery = "INSERT INTO answers (idOp, Answ) VALUES (@idOp, @Answ)";
                await connection.ExecuteAsync(insertQuery, respuesta);
                return Ok();
            }
        }
    }
}
