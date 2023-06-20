using Dapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;



namespace Backend
{

    [ApiController]
    [Route("api/hilos")]
    public class DriverPosts : ControllerBase
    {
        private readonly string _connectionString;

        public DriverPosts()
        {
            _connectionString = "server=localhost;database=tfcqe;uid=root;password=asddsa;";
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "SELECT * FROM posts";
                    var command = new MySqlCommand(query, connection);
                    var threads = new List<Hilo>();

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var thread = new Hilo
                            {
                                Id = reader.GetInt32("id"),
                                Title = reader.GetString("title"),
                                Content = reader.GetString("content"),
                                Author = reader.GetString("author")
                            };

                            threads.Add(thread);
                        }
                    }

                    return Ok(threads);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving threads: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetThread(int id)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "SELECT * FROM posts WHERE id = @id";
                    var command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@id", id);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            var thread = new Hilo
                            {
                                Id = reader.GetInt32("id"),
                                Title = reader.GetString("titulo"),
                                Content = reader.GetString("contenido"),
                                Author = reader.GetString("autor")
                            };

                            return Ok(thread);
                        }
                    }

                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving thread: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost(Hilo thread)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "INSERT INTO posts (titulo, contenido, autor) VALUES (@title, @content, @author)";
                    var command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@title", thread.Title);
                    command.Parameters.AddWithValue("@content", thread.Content);
                    command.Parameters.AddWithValue("@author", DateTime.Now);

                    await command.ExecuteNonQueryAsync();

                    return CreatedAtAction(nameof(GetThread), new { id = command.LastInsertedId }, thread);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error creating thread: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateThread(int id, Hilo updatedThread)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "UPDATE posts SET titulo = @title, contenido = @content WHERE id = @id";
                    var command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@title", updatedThread.Title);
                    command.Parameters.AddWithValue("@content", updatedThread.Content);
                    command.Parameters.AddWithValue("@id", id);

                    var affectedRows = await command.ExecuteNonQueryAsync();

                    if (affectedRows > 0)
                    {
                        return NoContent();
                    }

                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error updating thread: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteThread(int id)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var query = "DELETE FROM posts WHERE id = @id";
                    var command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@id", id);

                    var affectedRows = await command.ExecuteNonQueryAsync();

                    if (affectedRows > 0)
                    {
                        return NoContent();
                    }

                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting thread: {ex.Message}");
            }
        }
    }
}