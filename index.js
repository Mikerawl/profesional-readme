// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "Whit is the title of your project?",
    validate: validateInput,
},
                    {
    type: "input",
    name: "description",
    message: "Please provide a description of your program or project"
    validate: validateInput,
}
                    {
    type: "input",
    name: "instalation",
    message: "please provide an explanation of how to install or use your program or project.",
    validate: validateInput,
}

                    {
    type: "input",
    name: "usage",
    message: " Please describe how this software is to be used can used.",
    validate: validateInput,
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt (questions)
.then(anwers => {
const readmeContent = generateMarkdown(anwers)
})
}

// Function call to initialize app
init();

