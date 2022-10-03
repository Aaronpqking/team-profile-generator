const { forEach } = require("..");
const createTeam = require("..");
const teamArray = require('..');
const Employee = require("./dist/test/lib/employee");


const generateHTML = teamArray => {
    
    let html = "";

    teamArray.forEach(function (employee) {

        let innerText = "";
        let innerLabel = "";
                 switch(employee.getRole()) { 
                     case 'Manager':
                         innerText = employee.getOfficeNumber();
                         innerLabel = "Office Number: ";
                        break;
                     case 'Engineer':
                         innerText = employee.getGithub();
                         innerLabel = "Github: ";
                        break;
                     case 'Intern':
                         innerText = employee.getSchool();
                         innerLabel = "School: ";
                    } 
        html +=
            `
            <div class="row-3 card h-100" style="width: 18rem;">
            <div class="card employee-card" style="width: 18rem";>
         <div class="card-header">
             <h2 class="card-title">${employee.getName()}</h2>
             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item">ID: ${employee.getId()}</li>
                 <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                 <li class="list-group-item">` + innerLabel  + innerText + ` </li>        
             </ul>
         </div>
     </div>
     </div>
      `
 
    });
  
            
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Enter your description here" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
      <title>Tech Team</title>
    </head> 
    
    <body>
    <div class="jumbotron bg-danger jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">MY TEAM</h1>
      </div>
</div>

<div class="card-deck vw-100">


    `+ html +`
   </div>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
    </html> `    
    
        };
    


module.exports = (generateHTML);




    
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */