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
function generateMarkdown(data) {
    return `# ${data.Title} 
   
  #Table of Contents:
   Description
   Installation
   Usage
   Guidelines
   Testing
   License 
   Questions

   #Descirption
   ${date.Description}
   #Installation
   ${data.Installation}
   #Usage
   ${data.Usage}
   #Guidelines
   ${data.Guidelines}
   #Testing
   ${data.Testing}
   #License
   ${data.license}
   #Questions
   github.com/${date.GitHub}
   ${data.email}
   
`;
}

module.exports = generateMarkdown
