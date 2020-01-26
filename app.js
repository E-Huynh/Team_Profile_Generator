const inquirer = require("inquirer");

//Call functions
init();

//constructors
function Employee(name, id, role) {
    this.name = name;
    this.id = id;
    this.role = role;
}

//Functions
async function init() {
    try {
        //Gets Employee class info
        let { name } = await getName();
        let { id } = await getId();
        let { role } = await getRole();
        //Checks what role was chosen and gathers role specific inputs
        if (role === "Manager") {
            let { office } = await getOffice();
            console.log(office);
            let manager = new Employee(name, id, role, office);
            console.log(manager);
        }
        else if (role === "Engineer") {
            let { username } = await getUsername();
            let engineer = new Employee(name, id, role, username);
            console.log(engineer);
        }
        else if (role === "Intern") {
            let { school } = await getSchool();
            let intern = new Employee(name, id, role, school);
            console.log(intern);
        }
    }
    catch (err) {
        console.log(err);
    }
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
        message: "What is the employee's role? (Use arrow keys)",
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