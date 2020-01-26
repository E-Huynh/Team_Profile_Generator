const inquirer = require("inquirer");

//constructors

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
function getOffice() {
    const office = inquirer.prompt([{
        type: "input",
        message: "Enter employee's office number.",
        name: "office"
    }]);
    return office;
};
function getUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Enter employee's Github Username.",
        name: "username"
    }]);
    return username;
};
function getSchool() {
    const school = inquirer.prompt([{
        type: "input",
        message: "Enter employee's school.",
        name: "school"
    }]);
    return school;
};