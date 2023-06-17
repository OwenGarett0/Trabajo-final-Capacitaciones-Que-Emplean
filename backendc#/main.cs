using MySql.Data.MySqlClient;

string connectionString = "server=URL;database=DB-NAME;uid=USER;password=PASS;";

using (MySqlConnection connection = new MySqlConnection(connectionString))
{
    try
    {
        connection.Open();

        string sql = "SELECT * FROM tabla;";
        using (MySqlCommand command = new MySqlCommand(sql, connection))
        {
            using (MySqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    // Procesa los resultados de la consulta
                    // ...
                }
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine("Error: " + ex.Message);
    }
    finally
    {
        connection.Close();
    }
}