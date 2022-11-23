// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "input",
    name: "instructions",
    message: "How to install??",
  },

  {
    type: "input",
    name: "usage",
    message: "Usage Information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution Guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Test Instructions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
