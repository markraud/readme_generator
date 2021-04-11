// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let data;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of the application?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description of the application.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter the installation instructions.',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Please enter the usage information.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please choose a licence:',
    name: 'license',
  },
];

inquirer
  .prompt(questions)
  .then((response) => {
      data = response
      console.log(data);
    });

// console.log(data);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();