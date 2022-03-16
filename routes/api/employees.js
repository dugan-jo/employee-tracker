const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const employees = require('../../db/seeds.sql')


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`connected to the employee_db database.`)
);

router.get('/', (req, res) => res.json(employees))

module.exports = {router, db};