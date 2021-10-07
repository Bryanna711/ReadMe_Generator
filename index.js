const inquirer = require("inquirer");
const fs = require("fs");
const {makeBadge, ValidationError}= require('badge-maker');
// const generateMarkDown = require("./generatemarkdown");


// const questions = () => {
//     return inquirer.prompt([
//     {
//         type: "input",
//         message: "What is the title of your project?",
//         name: "title",
//     },
//     {
//         type: "input",
//         message: "What is the description of your project?",
//         name: "description",
//     },
//     {
//         type: "input",
//         message: "What are you installation instructions?",
//         name: "installation",
//     },
//     {
//         type: "input",
//         message: "What is your usage information?",
//         name: "usage",
//     },
//     {
//         type: "input",
//         message: "What are your contribution guidelines?",
//         name: "guidelines",
//     },
//     {
//         type: "input",
//         message: "What are you testing instructions?",
//         name: "yesting",
//     },
//     {
//         type: "list",
//         message: "Please Select a license.",
//         name: "license",
//         choices: ["Public", "Apache", "BSD", "MIT", "LGPL", "GPL", "Proprietary"]
//     },
//     {
//         type: "input",
//         message: "Enter your GitHub userName?",
//         name: "github",
//     },
//     {
//     type:"input",
//     message:"Enter your email?",
//     name:"email",
//     },
// ])
// .then((data)=>{
//     console.log(data);
// })
// };

// module.exports = questions; 
// // .then((questions) => {
//     const markDownContent = generateMarkDown(questions)

// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// const init = () => {
//     questions() 
//     .then(() => fs.writeFile("readMeExp.md", generateMarkDown()))
//     .then(()=> console.log("Successfully written to ReadMe"))
//     .catch((err) => console.error(err))
// };

// Function call to initialize app
// init();

const generateMarkDown =(data) => 
    `# ${data.title} 
      
     ##Table of Contents:
      [Description] (#Description)
      [Installation] (#Installation)
      [Usage] (#Usage)
      [Guidelines] (#Guidelines)
      [Testing] (#Testing)
      [License] (#License)
      [Questions] (#Questions) 
      
      
   
      ##Description:

      ${data.description}

      ##Installation:

      ${data.installation}

      ##Usage:

      ${data.usage}

      ##Guidelines:

      ${data.guidelines}

      ##Testing:

      ${data.testing}

      ##Questions: 

      GitHub:[GitHub Profile] (https://github.com/${data.github})

      Email: Contact me at : ${data.email} with any questions you may have!
      
      ##License:

      ${data.license}

      
   `;
   inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are you installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is your usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "guidelines",
    },
    {
        type: "input",
        message: "What are you testing instructions?",
        name: "yesting",
    },
    {
        type: "input",
        message: "Enter your GitHub userName.",
        name: "github",
    },
    {
        type:"input",
        message:"Enter your email.",
        name:"email",
    },
    {
        type: "list",
        message: "Please Select a license.",
        name: "license",
        choices: ["MIT", "GNU AGPLv3", "APACHE", "Unlicencse" ,"None"]
    },
])
.then((data) => {
    const markDownContent = generateMarkDown(data);

    fs.writeFile('readMeExp.md', markDownContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
   });  