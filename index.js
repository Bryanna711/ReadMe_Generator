const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkDown = (data) =>
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

      Contact: ${data.email}

      ##License:

      This project is covered under the ${data.license} license.

      ![](https://img.shields.io/badge/License-${data.license}-brightgreen)

   
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
        name: "testing",
    },
    {
        type: "input",
        message: "Enter your GitHub userName.",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email.",
        name: "email",
    },
    {
        type: "list",
        message: "Please Select a license.",
        name: "license",
        choices: ["MIT", "APGL-3.0", "APACHE-2.0", "Unlicense",]
    },
])

    .then((data) => {
        const markDownContent = generateMarkDown(data);

        fs.writeFile('readMeExp.md', markDownContent, (err) =>
            err ? console.log(err) : console.log('Successfully created ReadMe!')
        );

    });

// const renderLicenseLink = () => {
//     if (data.license === "None") {
//         return ""
//     }
//     if (data.license === "Unlicense") {
//         return "https://choosealicense.com/licenses/unlicense/"
//     }
//     if (data.license === "MIT") {
//         return "https://choosealicense.com/licenses/mit/"
//     }
//     if (data.license === "APACHE") {
//         return "https://choosealicense.com/licenses/apache-2.0/"
//     }
//     if (data.license === "GNU AGPLv3") {
//         return "https://choosealicense.com/licenses/agpl-3.0/"
//     }
//     const licenseLink = renderLicenseLink(data);
//     fs.appendFile("readMeExp.md", licenseLink, (err) =>
//         err ? console.log(err) : console.log('Successfully appended link!'))
// }


// const init = () => {
//     generateMarkDown();
//     renderLicenseLink()
// };

// init()