// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, desc, install, usage, license, github, name, email}) => `# ${title}

  ## Description
  
  ${desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Badges](#badges)
  - [Questions](#questions)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  Provide instructions and examples for use. ${usage}
  
 
  ## License
  
 This project uses a(n) ${license} license.
  
  ## Badges
  
  
  
  ## Questions
  
  MY github username is ${github} and you can reach it here github.com/${github}. For any other questions please email me[${name}] at ${email}.

`;


module.exports = generateMarkdown;
