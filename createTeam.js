const createTeam = require("./createTeam");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const teamArray = [];


const role = [
    {
        type: "list",
        name: "employeeRole",
        message: "What kind of employee would you like to add?",
        choices: ["Manager", "Intern", "Engineer", "None"],
    }
];
addRole();

function addRole() {
    inquirer.prompt(role).then(response => {
        console.log(response);
             switch (response.employeeRole) {
                 case "Manager":
                     promptManager();
                     break; 
                 case "Engineer":
                     promptEngineer();
                     break;
                 case "Intern":
                     promptIntern();
                     break;
                 default:
                     generateCards(teamArray);
            
 
             }
 })
 }
 

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager Name?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Manager's Email?",
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
    ]) .then(response => {
            let manager = new Manager(response.managerName, response.employeeId, response.employeeEmail, response.officeNumber)
        teamArray.push(manager);
            addRole();
            console.log(teamArray);
        
    })
}

// TODO: Create an array of questions for user input

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Engineer Name?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Engineer's Email?",
        },
        {
            type: "input",
            name: "githubAccount",
            message: "Enter Engineer's Github Account",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?",
        },
    ]) .then(response => {
            let engineer = new Engineer(response.engineerName, response.employeeId, response.employeeEmail, response.githubAccount)
        teamArray.push(engineer);
        addRole();
            console.log(teamArray);
        
    })
}


function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Intern's Name?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Intern's Email?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does this intern attend?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?",
        },
    ])     .then(response => {
            let intern = new Intern(response.internName, response.employeeId, response.employeeEmail, response.school)
            teamArray.push(intern);
        console.log(teamArray);
        addRole();
        
    })
}

function generateCards(teamArray) {
    fs.writeFile("./dist/index.html", generateHTML(teamArray),
        function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}



// // TODO: Create a function to write README file
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

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// generateCards();
module.exports = (teamArray);
// module.exports = (generateCards);