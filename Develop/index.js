// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");

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
  {
    type: "input",
    name: "github",
    message: "GitHub Link?",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose License?",
    choices: [
      "MIT",
      "Apache License 2.0",
      "BSD 2-Caluse",
      "BSD 3-Clause",
      "Eclipse 2.0",
      "Mozilla 2.0",
      "Boost 1.0",
      "The Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(generateMarkdown(answers));
    writeToFile("README.MD", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
