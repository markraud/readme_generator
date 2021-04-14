// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#Title: ${data.title}  
  ##Descrption: ${data.description} 
  ##Installation instructions: ${data.install}
  ##Usage: ${data.usage}
  ##License Information: ${data.license}
  ##Contribution Information: ${data.contributions}
  ##Testing Information: ${data.testing}
  ##GitHub Information: ${data.github}
  ##Email Information: ${data.email}
  ##MIT Licence thing: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`}
module.exports = generateMarkdown;
// let test = "this is a test"
// module.exports = test;