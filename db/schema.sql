DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);
        
CREATE TABLE roles (
  role_id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,	
  department_id INT,
  
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);
        
CREATE TABLE employee (
	employee_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    department_id INT,
    manager_id INT,
    
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
    ON DELETE SET NULL,
    
	FOREIGN KEY (employee_id)
    REFERENCES employee(manager_id)
    ON DELETE SET NULL
    );  
        
SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;