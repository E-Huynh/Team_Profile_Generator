const Employee = require('../lib/employee.js');

class Engineer extends Employee {
    constructor(name, id, github){
        super(name, id);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;