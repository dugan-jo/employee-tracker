INSERT INTO department (id, name)
VALUE 	(1, "Finance"),
		(2, "Business"),
        (3, "Sales"),
        (4, "Legal"),
        (5, "Engineering");
        
        
INSERT INTO role (id, title, salary, department_id)
VALUE 	(1.1, "Account Manager", 80000, 1),
		(1.2, "Accountant", 80000, 1),
        (1.3, "Intern", 65000, 1),
		(2.1, "Director of Business", 160000, 2),
        (3.1, "Director of Salesperson", 110000, 3),
        (3.2, "Regional Sales Manager", 85000, 3),
        (3.3, "Salesperson", 75000, 3),
        (4.4, "Intern-Sales", 55000, 3),
        (4.1, "Chief Legal Officer", 200000, 4),
        (4.2, "Lawyer", 150000, 4,
        (4.3, "Paralegal", 75000, 4),
        (4.4, "Intern-Legal", 65000, 4),
        (5.1, "Cheif Engineer", 160000, 5),
        (5.2, "Software Engineer", 12000, 5),
        (5.3, "DevOps Engineer", 11000, 5),
        (5.4, "Intern-Engineer", 65000, 5);
        
        
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE 	(2101, "Tracye", "Wilhelm", 2.1, null),	
		(5101, "Joseph", "Dugan", 5.1, null),
        (4101, "Maria", "Parerno", 4.1, null),
        (3101, "Austin", "Andrews", 3.1, null),
        (1101, "Kyle", "Doe", 1.1, null);
