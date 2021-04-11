// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of the application?',
    name: 'title',
    default: '**enter the title of the app here**',
  },
  {
    type: 'input',
    message: 'Please enter a description of the application.',
    name: 'description',
    default: '**enter a description of the app here**',
  },
  {
    type: 'input',
    message: 'Please enter the installation instructions.',
    name: 'install',
    default: '**enter a install instructions here**',
  },
  {
    type: 'input',
    message: 'Please enter the usage information.',
    name: 'usage',
    default: '**enter a usage info here**',
  },
  {
    type: 'list',
    choices: ["MIT","GNU","The Unlicense"],
    message: 'Please choose a licence:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Please enter the contribution guidelines.',
    name: 'contributors',
    default: '**enter the contribution guidelines here**',
  },
  {
    type: 'input',
    message: 'Please enter the instructions for testing',
    name: 'testing',
    default: '**enter a instructions for testing here**',
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