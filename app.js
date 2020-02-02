//NPM
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const GenerateHTML = require("./templates/generateHTML.js");

//Declare variables
const teamArr = [];
let teamHTML = ``;

//Call functions
init();


//Functions
async function init() {
    let check = "Yes";
    do{
        try {
            //Gets Employee class info
            let { name } = await inputName();
            let { id } = await inputId();
            let { email } = await inputEmail();
            let { role } = await inputRole();
            //Checks what role was chosen and gathers role specific inputs
            let secondaryInput;
            if (role === "Manager") {
                let secondaryInput = await inputOffice();
                let manager = new Manager(name, id, email, secondaryInput.office);
                teamArr.push(manager);
            }
            else if (role === "Engineer") {
                let secondaryInput = await inputUsername();
                let engineer = new Engineer(name, id, email, secondaryInput.username);
                teamArr.push(engineer);
            }
            else if (role === "Intern") {
                let secondaryInput = await inputSchool();
                let intern = new Intern(name, id, email, secondaryInput.school);
                teamArr.push(intern);
            }
            check = await addEmployee();
        }
        catch (err) {
            console.log(err);
        }    
    }
    while(check.anotherEmployee === "Yes");
    iterateArr(teamArr);
};
//Employee properties
function inputName() {
    const name = inquirer.prompt([{
        type: "input",
        message: "Enter employee's full name.",
        name: "name"
    }]);
    return name;
};
function inputId() {
    const id = inquirer.prompt([{
        type: "input",
        message: "Enter employee's ID.",
        name: "id"
    }]);
    return id;
};
function inputEmail() {
    const email = inquirer.prompt([{
        type: "input",
        message: "Enter employee's email.",
        name: "email"
    }]);
    return email;
};
function inputRole() {
    const role = inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    }]);
    return role;
};
//Manager properties
function inputOffice() {
    const office = inquirer.prompt([{
        type: "input",
        message: "Enter employee's office number.",
        name: "office"
    }]);
    return office;
};
//Engineer properties
function inputUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Enter employee's Github Username.",
        name: "username"
    }]);
    return username;
};
//Intern properties
function inputSchool() {
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
//iterates through array of user inputs
function iterateArr(arr) {
    for( let i = 0; i < arr.length; i++) {
        // console.log("iterateArr fx:", arr.[i]);
        // console.log(arr[i]);
        let memberHTML = GenerateHTML.createMessage(arr[i]);
        teamHTML = teamHTML + memberHTML;
    }
    console.log(teamHTML);
}