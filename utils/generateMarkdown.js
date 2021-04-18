// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === "MIT") {
    return `[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU GPLv3") {
    return `[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return `[http://unlicense.org/](http://unlicense.org/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else if (license === "MIT") {
    return `This application is covered by the MIT license.  Click the link for more information. `
  } else if (license === "GNU GPLv3") {
    return `This application is covered by the GNU GPLv3 license.   Click the link for more information. `
  } else {
    return `This application is covered by the Unlicense.  Click the link for more information. `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Descrption: 
  ${data.description}

  ## Table of Contents:

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}


  ## Contributing 
  ${data.contributions}

  ## Tests
  ${data.testing}

  ## Questions 
  You can access my GitHub profile throught the following link.
  [My GitHub](https://github.com/${data.github})

  Please email with any questions.
  [${data.email}](mailto:${data.email})


`}
module.exports = generateMarkdown;
