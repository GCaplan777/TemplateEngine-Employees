// File Links
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Dependencies==============
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeesArray = [];
let employee = "";

// User Input via Inquirer===============
// Start Questions to determine role
const employeeQ = [
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
    name: "officeNumber",
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
// prompt question for the user inquirer module
function questions() {
  inquirer.prompt(employeeQ).then(function ({ role }) {
    switch (role) {
      case "Manager":
        inquirer
          .prompt(managerQ)
          .then(function ({ name, id, email, officeNumber }) {
            employee = new Manager(name, id, email, officeNumber);
            employeesArray.push(employee);
            employeeQ[0].choices = [
              "Engineer",
              "Intern",
              "I am finished adding members.",
            ];
            questions();
          });
        break;

      case "Engineer":
        inquirer.prompt(engineerQ).then(function ({ name, id, email, github }) {
          employee = new Engineer(name, id, email, github);
          employeesArray.push(employee);
          questions();
        });
        break;

      case "Intern":
        inquirer.prompt(internQ).then(function ({ name, id, email, school }) {
          employee = new Intern(name, id, email, school);
          employeesArray.push(employee);
          questions();
        });
        break;
      default:
        outPut();
    }
  });
}

function outPut() {
  // render function with array of employee objects
  const employeeData = render(employeesArray);
  fs.writeFile(outputPath, employeeData, function (err) {
    if (err) {
      console.log("error", err);
    }
    console.log("Successfully created team cards!");
  });
}

function init() {
  console.log("***Please build your team***");
  questions();
}

init();
