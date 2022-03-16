class Department {
        constructor(id, department_name) {
            this.id = id;
            this.department_name = department_name;
        }
        getId() {
            return this.id
        }
        getDepartment_name() {
            return this.department_name
        }
    }

module.exports = Department;