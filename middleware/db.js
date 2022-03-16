const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`connected to the employee_db database.`)
);

db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });

module.exports = db;