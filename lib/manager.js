const Employee = require("../lib/employee.js")

class Manager extends Employee {
    constructor (name, id, officeNum) {
        super(name, id);
        this.role = "Manager";
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum;
    }
}
module.exports = Manager;