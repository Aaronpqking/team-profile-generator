const createTeam = require("./createTeam");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./manager");
const teamArray = [];

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Employee Name?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Employee Email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?",
        },
    ])
        .then(response => {
            var manager = new Manager(response.managerName, response.employeeId, response.employeeEmail, response.officeNumber)
            teamArray.push(manager);
            console.log(teamArray);
            addRole();
    })
}
promptManager();
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "list",
        name: "employeeRole",
        message: "What kind of employee would you like to add?",
        choices: ["Manager", "Intern", "Engineer", "None"],
    }
];
function addRole() {
    inquirer.prompt(questions)
        .then(response => {
            switch (response.employeeRole) {
                case "Manager":
                    promptManager();
                    break;
                case "Engineer":
            }
})
}

function generateCards() {
    fs.writeFileSync("/dist/index.html", generateHTML(teamArray));
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     inquirer.prompt(questions)
//     .then(function (response) {
//         console.log(response);

//         const content = fileGenerator(response);
//         console.log(content);
//         fs.writeFile("./", content, function (err) {
//             if (err) throw err
//             console.log("success");
//         });
//     });
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();