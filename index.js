const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./generatemarkdown");


const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",
    },
    {
        type: "input",
        message: "What are you installation instructions?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is your usage information?",
        name: "Usage",
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "Guidelines",
    },
    {
        type: "input",
        message: "What are you testing instructions?",
        name: "Testing",
    },
    {
        type: "list",
        message: "Please Select a license.",
        name: "License",
        choices: ["Public", "Apache", "BSD", "MIT", "LGPL", "GPL", "Proprietary"]
    },
    {
        type: "input",
        message: "Enter your GitHub userName?",
        name: "GitHub",
    },
    {
    type:"input",
    message:"Enter your email?",
    name:"Email",
    },
])
};
generateMarkDown(data);
// .then((questions) => {
//     const markDownContent = generateMarkDown(questions)

// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
const init = () => {
    questions() 
    .then(() => fs.writeFile("readMeExp.md", generateMarkDown(data)))
    .then(()=>console.log("Successfully written to ReadMe"))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();