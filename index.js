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
},
                    {
    type: "input",
    name: "instalation",
    message: "please provide an explanation of how to install or use your program or project.",
    validate: validateInput,
},

                    {
    type: "input",
    name: "usage",
    message: " Please describe how this software is to be used can used.",
    validate: validateInput,
},
                    {
type: "input",
name: "usage",
message: "What is your GitHub username?",
validate: validateInput,
},


                    {
type: "input",
name: "usage",
message: " Please select a license for you project.",
choic: [],
validate: validateInput,
},
                {
type: "input",
name: "userEmail",
message: "What is your email address for contributor contact?",
validate: function(value) {
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(email)) {
		return true;
	}
	return false, "Not a valid email address. Please enter a valid email address";
}
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if err {
            return console.log(err);
        }
        });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then((answers) => {
        console.log(JSON.stringify(data, null, ""));
        data.getLicense = getLicense(data.License);
        writeToFile("./example./README.md",data);
    }
});


// Function call to initialize app
init();

