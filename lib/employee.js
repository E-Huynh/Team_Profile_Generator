class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.role = "Employee"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Employee;