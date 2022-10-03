
const promptEngineer = require('../..');
const inquirer = require("inquirer");
const Engineer = require('../../engineer');


// describe('test user input' () => {

//     // stub inquirer
//     let backup;
//     before(() => {
//       backup = addRole();
//       addRole(questions) => Promise.resolve({response: 'Manager'})
//     })
  
//     it('should equal test', () => {
//       module(...).then(answers => answers.response.should.equal('Manager'))
//     })
  
//     // // restore
//     // after(() => {
//     //   inquirer.prompt = backup
//     // })
  
//   })
  

// test(" Add Role Iteration", async () => {
//     let mockResponses = {
//         "employeeRole": "Engineer",
//         "engineerName": "Test",
//         "employeeEmail": "Test@test.com",
//         "githubAccount": "TestMan",
//         "employeeID": "15",

//     };

    // const inquirer = {
    //     prompt: (questions) => {
    //         let response = {}
    //         questions.forEach((question) => {
    //             response[question.engeineerName] = mockResponses[question.engineerName]
    //         });
    //         return Promise.resolve(response);
    //     }
    // };
    // more to come

//     const employee = await addRole();
//     expect(typeof (employee)).toBe("object")
// });

test("Can get name via promptEngineer()", () => {
    const name = "Sean";
    const e = new Engineer(name);
    expect(promptEngineer(e.name).toBe(name));
});