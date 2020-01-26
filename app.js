const inquirer = require("inquirer");

//constructors
function Employee(name, id, role) {
    this.name = name;
    this.id = id;
    this.role = role;
}


//functions
function name() {
    const name = inquirer.prompt([{
        type: "input",
        message: "Enter employee's full name.",
        name: "name"
    }]);
    return name;
};
function getId() {
    const id = inquirer.prompt([{
        type: "input",
        message: "Enter employee's ID.",
        name: "id"
    }]);
    return id;
};
function getRole() {
    const role = inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    }]);
    return role;
};
//Manager properties
function getOffice() {
    const office = inquirer.prompt([{
        type: "input",
        message: "Enter employee's office number.",
        name: "office"
    }]);
    return office;
};
//Engineer properties
function getUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Enter employee's Github Username.",
        name: "username"
    }]);
    return username;
};
//Intern properties
function getSchool() {
    const school = inquirer.prompt([{
        type: "input",
        message: "Enter employee's school.",
        name: "school"
    }]);
    return school;
};