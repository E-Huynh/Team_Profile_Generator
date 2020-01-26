//NPM
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

//Declare variables
const teamArr = [];

//Call functions
init();

//Functions
async function init() {
    let check = "Yes";
    do{
        try {
            //Gets Employee class info
            let { name } = await getName();
            let { id } = await getId();
            let { role } = await getRole();
            //Checks what role was chosen and gathers role specific inputs
            let secondaryInput;
            if (role === "Manager") {
                let secondaryInput = await getOffice();
                let manager = new Manager(name, id, role, secondaryInput.office);
                teamArr.push(manager);
            }
            else if (role === "Engineer") {
                let secondaryInput = await getUsername();
                let engineer = new Engineer(name, id, role, secondaryInput.username);
                teamArr.push(engineer);
            }
            else if (role === "Intern") {
                let secondaryInput = await getSchool();
                let intern = new Intern(name, id, role, secondaryInput.school);
                teamArr.push(intern);
            }
            console.log("teamArr: ", teamArr);
            check = await addEmployee();
        }
        catch (err) {
            console.log(err);
        }    
    }
    while(check.anotherEmployee === "Yes");
};
//Employee properties
function getName() {
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
//While loop check
function addEmployee() {
    const anotherEmployee = inquirer.prompt([{
        type: 'list',
        name: 'anotherEmployee',
        message: "Add another employee?",
        choices: ['Yes', 'No']
    }]);
    return anotherEmployee;
};