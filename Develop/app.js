// DEPENDENCIES==================================================
// LINKS to JS pages in Library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// MODULES
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// OUTPUT
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// add a dependecy called JEST for testing?

// USER INPUT====================================================

// prompt the user for info on team manager
// engineer
// intern
const questions = [
  // MANAGER
  {
    type: "input",
    message: "Enter Name",
    name: "name",
  },
];

// name
// id
// email
// role
// Employee

// MANAGER INCLUDES====
// officeNumber

// ENGINEER INCLUDES===
// GitHub username

// INTERN=====
// school

// FUNCTIONS================

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function to initialize program

function init() {
  // prompt question for the user inquirer module
  inquirer.prompt(questions).then(function (response) {
    // writeToFile("README.md", genMarkdown(response));
    console.log(response);
  });
}

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
