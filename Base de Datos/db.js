const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

const sqlFilePath = './database.sql';

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }

    console.log('Connected to the MySQL database.');

    const sqlCommands = fs.readFileSync(sqlFilePath, 'utf8');

    connection.query(sqlCommands, (error, results, fields) => {
        if (error) {
            console.error('Error importing .sql file: ', error);
            return;
        }

        console.log('Imported .sql file successfully.');

        connection.end((err) => {
            if (err) {
                console.error('Error closing the database connection: ', err);
                return;
            }
            console.log('Database connection closed.');
        });
    });
});