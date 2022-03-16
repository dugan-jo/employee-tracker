const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./middleware/db')

// const Employee = require('./lib/Employee')
// const employees = require('./db/employees');

const Department = require('./lib/Department')
// const department = require('./db/departments');

// const Roles = require('./lib/Roles')
// const roles = require('./db/roles')


const newDepartment = [];
const newEmployee = [];
const newRole = [];

const init = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'init_Choice',
            message: 'Please choose from the following?',
            choices: ['Would you like to see a list of all the DEPARTMENTS?',
                'Get all EMPLOYEES?',
                'Would you like to see all the ROLES?',
                'Get all Employees by Department?',
                'Add a new Department?',
                'Add Manager to Department?',
                'Add a new Employee?',
                'Edit an Existing Employee?',
                'Remove an Employee?',
                'Get Office Budget?',
                'Get Budgetby Department?'
            ],
            default: ['Get all EMPLOYEES?']
        }])
        .then((data) => {
            if (data.init_Choice === "Get all EMPLOYEES?") {
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                });
            } else if (data.init_Choice === 'Would you like to see a list of all the DEPARTMENTS?') {
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                });
            } else if (data.init_Choice === "Would you like to see all the ROLES?") {
                db.query('SELECT * FROM role', function (err, results) {
                    console.table(results);
                });
            } else if (data.init_Choice === "Add a new Department?") {
                return inquirer.prompt([{
                            type: 'input',
                            message: 'What Department would you like to add?',
                            name: 'getDepartment_name',
                            // when: (answers) => answers.init_Choice === 'Add a new Department?'
                        },
                        {
                            type: 'input',
                            message: 'New Department ID number?',
                            name: 'getId',
                            // when: (answers) => answers.init_Choice === 'Add a new Department?'
                        }
                    ])
                    .then((data) => {
                        const department = new Department(data.getId, data.getDepartment_name)
                        console.log(newDepartment.push(department), 'line68')
                        console.log(`NEW ${data.getDepartment_name} DEPARTMENT ADDED`)
                        console.table(newDepartment)
                        db.query('INSERT INTO department', newDepartment, function (err, results) {
                        console.table(results);
                        })
                        });
                        conseol.table(newDepartment)
                        returnToMainMenu();
                    }
                    
            })

            return newDepartment;
};


const returnToMainMenu = (connection) => {
    return inquirer.prompt([{
            type: 'list',
            message: 'Would you like to return to the main menu?',
            choices: ['YES', 'NO'],
            default: ['YES'],
            name: 'anotherInput'
        }])
        .then((data) => {
            if (data.anotherInput === "YES") {
                init();
            }
            // connectionEnd();
        })
}

// const connectionEnd = () => connection.end();


module.exports = init;