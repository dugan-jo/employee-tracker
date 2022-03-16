const fs = require('fs');
const inquirer = require('inquirer');
const Department = require('./lib/Department')
const Employee = require('./lib/Employee')

const newDepartment = [];
const newEmployee = [];
const newRole = [];

const init = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'init_Choice',
            message: 'Please choose from the following?',
            choices: ['Get all Employees?', 
            'Get all Employees by Department?', 
            'Add a new Department?',
            'Add Manager to Department?',
            'Add a new Employee?',
            'Edit an Existing Employee?',
            'Remove an Employee?',
            'Get Office Budget?',
            'Get Budgetby Department?'],
            default: ['Get all Employees?']
        },
        {
            type: 'input',
            message: 'What Department would you like to add?',
            name: 'getDepartment_name',
            when: (answers) => answers.init_Choice === 'Add a new Department?'
        },
        {
            type: 'input',
            message: 'New Department ID number?',
            name: 'getId',
            when: (answers) => answers.init_Choice === 'Add a new Department?'
        }
    ])
    .then((data) => {
        if (data.init_Choice === "Get all Employees?") {
            console.log(Employee);
        }
        console.log(`HERE IS A LIST OF ALL THE EMPLOYEES
        ${newEmployee}`)
        console.info(newDepartment, 'line 43');
    })
    .then((data) => {
        if (data.init_Choice === "Add a new Department?") {
            const department = new Department(data.getId, data.getDepartment_name)
            return newDepartment.push(department)
        }
        console.log(`${data.getDepartment_name} DEPARTMENT HAS BEEN CREATED!`)
        console.info(newDepartment, 'line 43');
    })
    .then((data) => {
        return inquirer.prompt([{
            type: 'list',
            message: 'Would you like to return to the main menu?',
            choices: ['YES', 'NO'],
            default: ['YES'],
            name: 'anotherInput'
        }])
    })
    .then((data) => {
        if (data.anotherInput === 'YES') {
            init()
        } else {
            console.log(newDepartment, 'line 49')
        }
        console.log(newDepartment, 'line 51')
    });
    return newDepartment;
};

module.exports = init;