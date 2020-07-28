// Dependencies==============
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// User Input via Inquirer===============
let employeesArray = [];
let employee = "";

const employeeQ = [
  // Start Questions to determine role
  {
    type: "list",
    message: "Choose Employee Role",
    name: "role",
    choices: ["Manager", "Engineer", "Intern", "I am finished adding members"],
  },
];



// Manager Questions
const managerQ = [
  {
    type: "input",
    message: "Manager: Name",
    name: "name",
  },
  {
    type: "input",
    message: "Manager: ID",
    name: "id",
  },
  {
    type: "input",
    message: "Manager: Email",
    name: "email",
  },
  {
    type: "input",
    message: "Manager: Office Number",
    name: "officeNum",
  },
];
// Engineer Questions
const engineerQ = [
  {
    type: "input",
    message: "Engineer: Name",
    name: "name",
  },
  {
    type: "input",
    message: "Engineer: ID",
    name: "id",
  },
  {
    type: "input",
    message: "Engineer: Email",
    name: "email",
  },
  {
    type: "input",
    message: "Engineer: Github user name",
    name: "github",
  },
];
// Intern Questions
const internQ = [
  {
    type: "input",
    message: "Intern: Name",
    name: "name",
  },
  {
    type: "input",
    message: "Intern: ID",
    name: "id",
  },
  {
    type: "input",
    message: "Intern: Email",
    name: "email",
  },
  {
    type: "input",
    message: "Intern: School",
    name: "school",
  },
];

// Functions================

function questions() {
  // prompt question for the user inquirer module
  inquirer.prompt(employeeQ).then(function ({role}) {
    // writeToFile("README.md", genMarkdown(response));
    switch(role){
      case "Manager":
        inquirer
        .prompt(managerQ)
        .then(function ({name, id, email, officeNum}){
          employee = new Manager(name, id, email, officeNum)
          employeesArray.push(employee)
          questions[0].choices = [
            "Engineer",
            "Intern",
            "I am finished adding members.",
          ]
          questions()
        });
        break;
    

// function call to initialize program
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// from README
// The different employee types should all inherit some methods and properties from a base class of Employee.
