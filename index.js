// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the title of the application?',
    name: 'title',
    default: '**Default App**',
  },
  {
    type: 'input',
    message: 'Enter a description of the application.',
    name: 'description',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter the installation instructions.',
    name: 'install',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter the usage information.',
    name: 'usage',
    default: 'None',
  },
  {
    type: 'list',
    choices: ["MIT","GNU","The Unlicense"],
    message: 'Choose a licence:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Enter the contribution guidelines.',
    name: 'contributions',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter the instructions for testing.',
    name: 'testing',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter your GitHub username.',
    name: 'github',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter your email address.',
    name: 'email',
    default: 'None',
  },
];

function askQuestions() {
  inquirer
  .prompt(questions)
  .then((response) => {
      // data = response;
      console.log(response);
      return response;

    });
}

// this console.log prints out [Function: generateMarkdown]
// console.log(generateMarkdown);  

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// inquirer
//   .prompt(questions)
//   .then((response) => {
//       data = response;
//       // console.log(data);
//       return data;
//     });
}

// Function call to initialize app
init();
askQuestions();
// console.log(data);