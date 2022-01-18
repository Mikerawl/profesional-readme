// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// License function

function getLicense(value) {
    if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    } else if (value === "GNU LGPL v3") {
        return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (value === "Boost Software1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}


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
    message: "Please provide a description of your program or project",
    validate: validateInput,
},
                    {
    type: "input",
    name: "installation",
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
choice: [],
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

