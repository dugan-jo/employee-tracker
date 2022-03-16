const express = require('express');
const mysql = require('mysql2');

const init = require('./index');
const path = require('path');
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`connected to the employee_db database. line 15`)
);

db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });

//MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(init);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`http://localhost:${PORT}`));

