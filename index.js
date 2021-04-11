// TODO: Include packages needed for this application
// I don't understand what it wants us to do here.  we need to have 


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
  }
];

// TODO: Create a function to write README file
writeToFile(fileName, data => {
  fs.writeFile("log.txt", ` The title is ${question.title} `, (err) =>
  err ? console.error(err) : console.log('Success!'))
});


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt(questions)
.then((response) => {
  console.log(response.title)
  console.log(response.description)
  console.log(response.install)
  console.log(response.usage)
  console.log(response.license) , (err) =>
err ? console.error(err) : console.log('Success!'))
);


// TODO: Create a function to initialize app
// function init() {

// Function call to initialize app
// init();