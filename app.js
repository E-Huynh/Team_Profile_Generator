//NPM
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const GenerateHTML = require("./templates/generateHTML.js");
const fs = require("fs");

//Declare variables
const teamArr = [];
let teamHTML = "";



//Call functions
init();

//Functions
async function init() {
    let check = "Yes";
    do{
        try {
            //Gets Employee class info
            let { name } = await inputName();
            //Formats the name to capitalize the first letter of each word
            name = titleCase(name);
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
    createPage(teamHTML);
}
//Employee properties
function inputName() {
    const name = inquirer.prompt([{
        type: "input",
        message: "Enter employee's full name.",
        name: "name",
        validate: validateAlphaAndSpace
    }]);
    return name;
}
function inputId() {
    const id = inquirer.prompt([{
        type: "input",
        message: "Enter employee's ID.",
        name: "id",
        validate: validateNumber
    }]);
    return id;
}
function inputEmail() {
    const email = inquirer.prompt([{
        type: "input",
        message: "Enter employee's email.",
        name: "email",
        validate: validateEmail
    }]);
    return email;
}
function inputRole() {
    const role = inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    }]);
    return role;
}
//Manager properties
function inputOffice() {
    const office = inquirer.prompt([{
        type: "input",
        message: "Enter employee's office number.",
        name: "office",
        validate: validateNumber
    }]);
    return office;
}
//Engineer properties
function inputUsername() {
    const username = inquirer.prompt([{
        type: "input",
        message: "Enter employee's Github Username.",
        name: "username",
        validate: validateNotEmpty
    }]);
    return username;
}
//Intern properties
function inputSchool() {
    const school = inquirer.prompt([{
        type: "input",
        message: "Enter employee's school.",
        name: "school",
        validate: validateAlphaAndSpace
    }]);
    return school;
}
//While loop check
function addEmployee() {
    const anotherEmployee = inquirer.prompt([{
        type: 'list',
        name: 'anotherEmployee',
        message: "Add another employee?",
        choices: ['Yes', 'No']
    }]);
    return anotherEmployee;
}
//iterates through array of user inputs and creates an html string
function iterateArr(arr) {
    for( let i = 0; i < arr.length; i++) {
        let memberHTML = GenerateHTML.createMessage(arr[i]);
        teamHTML += memberHTML;
    }
}
//assigns individual teamHtml to mainHTML and creates a .html file in outputs folder
function createPage(html) {
    let finalHTML = GenerateHTML.createMainHTML(html);
    fs.writeFile("./output/teamProfile.html", finalHTML, function(err) {
        if (err) {
          return console.log(err);
        }     
        console.log("Succesfully create html");   
      });   
}
//Checks that the input only contains alpha characters and spaces
function validateAlphaAndSpace(value) {
    let pattern = /^[a-zA-Z ]*$/;
    if(value.search(pattern) !== -1 && value.length > 0) {
        return true;
    }
    else{
        console.log("\nMust be alpha characters");
        return false;
    }
}
//Checks that the input is only a number
function validateNumber(value) {
    let pattern = /^\d+$/;
    if(value.search(pattern) !== -1 && value.length > 0) {
        if(teamArr.length === 0) {
            return true;
        }
        return compareId(teamArr, value);
    }
    else{
        console.log("\nMust be a number");
        return false;
    }
}
//Check that the input in not empty
function validateNotEmpty(value) {
    if(value.length > 0) {
        return true;
    }
    else{
        console.log("\nNo value entered");
        return false;
    }
}
//validates that the input is in email format
function validateEmail(value) {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(value.search(pattern) !== -1 && value.length > 0) {
        return true;
    }
    else{
        console.log("\nMust be in email format (ie. test@gmail.com");
        return false;
    }
}
//compares existing inputted IDs with the user input
function compareId(teamArray, value) {
    let matchedPairs = teamArray.filter(function(teamMember){
        // Filter will return the team member that matches the below condition when true
        return teamMember.id == value;
    });
    if(matchedPairs.length > 0){
        console.log('\nId already Exists.');
        return false;
    } else return true;
}
//
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}