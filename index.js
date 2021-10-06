const inquirer = require("inquirer");
const fs = require("fs");

const questions=
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "##Title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "##Description",
    },
    {
        type: "input",
        message: "What are you installation instructions?",
        name: "##Installation",
    },
    {
        type: "input",
        message: "What is your usage information?",
        name: "##Usage",
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "##Guidelines",
    },
    {
        type: "input",
        message: "What are you testing instructions?",
        name: "##Testing",
    },
    {
        type: "list",
        message: "Please Select a license.",
        name: "##License",
        choices: ["Public", "Apache", "BSD", "MIT", "LGPL", "GPL", "Proprietary"]
    },
    {
        type: "input",
        message: "Enter your GitHub userName?",
        name: "userName",
    },
    {
    type:"input",
    message:"Enter your email?",
    name:"Email",
    },
]);
    questions.then((data) => {
        // const readMe = `${data}.json`;
        fs.writeFile("project.md", JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();