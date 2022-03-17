USE employee_db;

INSERT INTO department (department_name)
VALUE 	("Finance"),
		("Business"),
        ("Sales"),
        ("Legal"),
        ("Engineering");
        
INSERT INTO roles (title, salary, department_id)
VALUE 	("Account Manager", 80000, 1),
		("Accountant", 80000, 1),
        ("Intern", 65000, 1),
		("Director of Business", 160000, 2),
        ("Director of Salesperson", 110000, 3),
        ("Regional Sales Manager", 85000, 3),
        ("Salesperson", 75000, 3),
        ("Intern-Sales", 55000, 3),
        ("Chief Legal Officer", 200000, 4),
        ("Lawyer", 150000, 4),
        ("Paralegal", 75000, 4),
        ("Intern-Legal", 65000, 4),
        ("Cheif Engineer", 160000, 5),
        ("Software Engineer", 120000, 5),
        ("DevOps Engineer", 110000, 5),
        ("Intern-Engineer", 65000, 5);
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE 	("Tracye", "Wilhelm", 2, null),
		("Joseph", "Dugan", 5, null),
        ("Maria", "Parerno", 4, null),
        ("Austin", "Andrews", 3, null),
        ("Kyle", "Doe", 1, null);
        
        