const express = require('express');
const mysql = require('mysql2');
const { userInfo } = require('os');

const PORT = process.env.PORT || 3002;
const app = express();
console.log(mysql);

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`connected to the employee_db database.`)
);

db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listenerCount(PORT, () => {
    console.log(`server running on port ${PORT}`);
});