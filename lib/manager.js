const Employee = require("../lib/employee.js")

class Manager extends Employee {
    constructor (name, id, office) {
        super(name, id);
        this.role = "Manager";
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}
module.exports = Manager;