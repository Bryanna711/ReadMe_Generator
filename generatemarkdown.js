
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
const generateMarkDown =(data) => {
 `# ${data.title} 
   
  #Table of Contents:
   Description
   Installation
   Usage
   Guidelines
   Testing
   License 
   Questions

   #Description
   ${data.description}\n
   #Installation
   ${data.installation}\n
   #Usage
   ${data.usage}\n
   #Guidelines
   ${data.guidelines}\n
   #Testing
   ${data.testing}\n
   #License 
   ${data.license}\n
   #Questions
   GitHub:[GitHub Profile] (https://github.com/${data.github})
   Email: Contact me at : ${data.email} with any questions you may have!
   
`;
};

// module.exports = generateMarkDown
