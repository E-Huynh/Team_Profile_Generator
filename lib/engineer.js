const Employee = require('../lib/employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;