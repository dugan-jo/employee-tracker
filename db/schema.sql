DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);
        
CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,	
  department_id INT,
  
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE CASCADE
);
        
CREATE TABLE employee (
	  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    
	FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
    );  
        
SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;