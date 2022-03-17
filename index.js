const fs = require('fs');
const inquirer = require('inquirer');
const {
    now
} = require('moment');
const db = require('./db/db')

const init = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'init_Choice',
            message: 'Please choose from the following?',
            choices: ['Get all DEPARTMENTS?',
                'Get all EMPLOYEES?',
                'Get all ROLES?',
                'Add a new Department?',
                'Add new Role?',
                'Add a new Employee?',
                'Update an Existing Employees Role?',
                'Get all Employees by Role?',
                'Get Department Budget?',
                'EXIT'
            ],
            
    }])
    .then((data) => {
        if (data.init_Choice === "Get all EMPLOYEES?") {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                init()
            });

        } else if (data.init_Choice === 'Get all DEPARTMENTS?') {
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
                init()
            });

        } else if (data.init_Choice === "Get all ROLES?") {
            db.query('SELECT * FROM roles', function (err, results) {
                console.table(results);
                init()
            });

        } else if (data.init_Choice === "Add a new Department?") {
            return inquirer.prompt([{
                    type: 'input',
                    message: 'What Department would you like to add?',
                    name: 'newDepartmentName',
            }])
                .then((data) => {
                    db.query('INSERT INTO department (department_name) VALUES (?)', data.newDepartmentName, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(`NEW ${data.newDepartmentName} DEPARTMENT ADDED`)
                            db.query('SELECT * FROM roles', function (err, results) {
                                console.table(results);
                                init()
                            })
                        }
                    })
                })
        } else if (data.init_Choice === "Add new Role?") {
            return inquirer.prompt([{
                        type: 'input',
                        message: 'What Role would you like to add?',
                        name: 'newRole_title',
                    },
                    {
                        type: 'input',
                        message: 'How much does this role pay?',
                        name: 'newRole_salary',
                    },
                    {
                        type: 'input',
                        message: 'What department does this Role belong to?',
                        name: 'newRole_department_id'
                    }
                ])
                .then((roleData) => {
                    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${roleData.newRole_title}', '${roleData.newRole_salary}', '${roleData.newRole_department_id}')`, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            db.query('SELECT * FROM roles', function (err, results) {
                                console.table(results);
                                console.log(`NEW ${roleData.newRole_title} ROLE ADDED`)
                                init()
                            })
                        }
                    })
                })
        } else if (data.init_Choice === "Add a new Employee?") {
            return inquirer.prompt([{
                        type: 'input',
                        message: 'What is the new emplyees first name?',
                        name: 'newEmployee_first_name',
                    },
                    {
                        type: 'input',
                        message: 'What is the new emplyees last name?',
                        name: 'newEmployee_last_name',
                    },
                    {
                        type: 'input',
                        message: 'What is the ROLE ID for the new employee',
                        name: 'newEmployee_role_id'
                    },
                    {
                        type: 'input',
                        message: 'what is the managers id?',
                        name: 'newEmployee_manager_id'
                    }
                ])
                .then((employeeData) => {
                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeData.newEmployee_first_name}', '${employeeData.newEmployee_last_name}', '${employeeData.newEmployee_role_id}', '${employeeData.newEmployee_manager_id}')`, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            db.query('SELECT * FROM employee', function (err, results) {
                                console.table(results);
                                console.log(`NEW ${employeeData.newEmployee_first_name} ROLE ADDED`);
                                init();
                            })
                        }
                    })
                })
        } else if (data.init_Choice === "Update an Existing Employees Role?") {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                
            return inquirer.prompt([{
                    type: 'input',
                    message: `What Employee Would you like to Update
            PLEASE SELECT FROM THE ID`,
                    name: 'employee_ID',
                },
                {
                    type: 'input',
                    message: 'What is the new Role id?',
                    name: 'newEmployee_role',
                }])
                .then((dataUpdate) => {
                    db.query(`UPDATE employee SET role_id  = '${dataUpdate.newEmployee_role}' WHERE id = '${dataUpdate.employee_ID}';`);
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(`YOU HAVE UPDATED THE ROLE FOR EMPLOYEE WITH THE ID OF ${dataUpdate.employee_ID}`)
                            db.query('SELECT * FROM employee', function (err, results) {
                                console.table(results);
                                init()
                            })
                        }
                })
            })
        } else if (data.init_Choice === "Get all Employees by Role?") {
            db.query('SELECT * FROM employee ORDER BY role_id;', function (err, results) {
                console.table(results);
                if (err) {
                    console.log(err)
                } 
                init();
            })
        } else if (data.init_Choice === "EXIT") {
            process.exit();
        } else if (data.init_Choice === "Get Department Budget?") {
            db.query(
            `SELECT department_id, salary
            FROM (
                SELECT department_id, salary
                FROM roles
                UNION
                SELECT employee.role_id, 'unknown' AS department_id
                FROM employee
            ) AS a
            INNER JOIN employee ON role_id = department_id
            ORDER BY department_id, salary`,
            
            function (err, results) {
                console.table(results);
                if (err) {
                    console.log(err)
                } 
            init()
            })
        }
    })
}




init();





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
            // process.exit() || connection.end();
        })
}




module.exports = init;