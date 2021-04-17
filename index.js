// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
let data;
// const test = require('./utils/generateMarkdown');
// console.log(test);

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
    choices: ["MIT","GNU GPLv3","The Unlicense","None"],
    message: 'Choose a licence:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Enter the contributors to the app.',
    name: 'contributions',
    default: 'None',
  },
  {
    type: 'input',
    message: 'Enter information about testing.',
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

// TODO: Create a function to write README file
function writeToFile() {
  // console.log('this is writeToFile test');
  fs.writeFile("README-new.md",generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
      data = response;
      // console.log(data);
      // console.log(generateMarkdown);
      // generateMarkdown;
      writeToFile();
    });
}


// Function call to initialize app
init();
