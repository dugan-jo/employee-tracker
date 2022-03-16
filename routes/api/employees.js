const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const employees = require('../../db/employees')

router.get('/', (req, res) => res.json(employees))

module.exports = {router, db};