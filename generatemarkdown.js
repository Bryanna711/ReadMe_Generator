
// // TODO: Create a function that returns a license badge based on which license is passed in

// const fs= require("fs")
// const js = require("./index")

// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if(license === "None"){
//         return ""
//     }
//     else{
//         fs.appendFile("readMeExp.md", renderLicenseLink(license));
//         fs.appendFile("readMEExp.md",renderLicenseBadge(license))
//     }
    
//  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink() { 
//     var license = data.license;
//     if(license ==="None"){
//         return ""
//     }
//     if (license === "Unlicense") {
//         return "https://choosealicense.com/licenses/unlicense/"
//     }
//     if (license === "MIT"){
//         return "https://choosealicense.com/licenses/mit/"
//     }
//     if(license === "APACHE") {
//         return "https://choosealicense.com/licenses/apache-2.0/"
//     }
//     if (license === "GNU AGPLv3"){
//         return "https://choosealicense.com/licenses/agpl-3.0/"
//     }
// }
// fs.appendFile("readMeExp.md", renderLicenseLink(license))


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function to generate markdown for README
// const generateMarkDown =(data) => {
//  `# ${data.title} 
   
//   #Table of Contents:
//    Description
//    Installation
//    Usage
//    Guidelines
//    Testing
//    License 
//    Questions

//    #Description
//    ${data.description}\n
//    #Installation
//    ${data.installation}\n
//    #Usage
//    ${data.usage}\n
//    #Guidelines
//    ${data.guidelines}\n
//    #Testing
//    ${data.testing}\n
//    #License 
//    ${data.license}\n
//    #Questions
//    GitHub:[GitHub Profile] (https://github.com/${data.github})
//    Email: Contact me at : ${data.email} with any questions you may have!
   
// `;
// };

// module.exports = generateMarkDown


const renderLicenseLink = (license) => {
    var license= data.license
    if (license === "None") {
        return ""
    }
    if (license === "Unlicense") {
        return "https://choosealicense.com/licenses/unlicense/"
    }
    if (license === "MIT") {
        return "https://choosealicense.com/licenses/mit/"
    }
    if (license === "APACHE") {
        return "https://choosealicense.com/licenses/apache-2.0/"
    }
    if (license === "GNU AGPLv3") {
        return "https://choosealicense.com/licenses/agpl-3.0/"
    }
    const licenseLink = renderLicenseLink(license);
    fs.appendFile("readMeExp.md", licenseLink, (err) =>
        err ? console.log(err) : console.log('Successfully appended link!'))
}

