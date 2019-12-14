var Employee = require('./lib/Employee');
var Manager = require('./lib/Manager')
var inquirer = require("inquirer");

//var emp1 = new Employee('Stacey', 1, "Manager");
//var emp2 = new Employee('stacey2', 2);

//console.log(emp1.getName());
//console.log(emp2.getName());
//console.log(emp1.getRole());
//console.log(emp2.getRole());

let employeeArr =[];

function start(){
    inquirer.prompt({
        type: "list",
        message: "Is your position a manager, engineer or intern?",
        name: "position",
        choices: ["manager", "engineer", "intern", "I'm finished"]
    }).then(function(response){
        console.log(response)
        if(response.position === "manager"){
            console.log("you chose manager");
            makeManager();
        } else if(response.position === "engineer"){

        } else if(response.position === "intern"){
            //intern
        } else {
            //function that makes html file
        }

        //switch statement
    });
}

function makeManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your Manager ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your office number?",
            name: "officeNumber"
        },
        
    ]).then(function(response){
        const employee = new Manager(response.name, response.id, response.officeNumber);
        console.log(employee.getRole())
        employeeArr.push(employee)
        start();
    })
}

//employeeArr[0].getRole();






//var Employee = require('./lib/Employee');


//var emp1 = new Employee('Stacey', 1, "Manager");
//var emp2 = new Employee('stacey2', 2);

//console.log(emp1.getName());
//console.log(emp2.getName());
//console.log(emp1.getRole());
//console.log(emp2.getRole());