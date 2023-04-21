// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
  },

  {
    type: "input",
    name: "installation",
    message: "What command should be used to install the application?",
  },

  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the App?",
  },

  {
    type: "input",
    name: "contributing",
    message: "How can someone contribute to this project?",
  },

  {
    type: "list",
    name: "license",
    message: "What is the license you are using for your project?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "tests",
    message: "What command is used for running tests?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your Github Username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("generated ReadMe");
    writeToFile(responses.title + ".md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();

// Questions to ask: formatting, why is the readme indenting test and questions?
// why can I not push to my repo?
