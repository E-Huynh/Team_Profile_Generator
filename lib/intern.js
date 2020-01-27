const Employee = require('../lib/employee.js');

class Intern extends Employee {
    constructor(name, id, school){
        super(name, id);
        this.role = "Intern";
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;