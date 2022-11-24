// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const licenceGenerator = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", 
"Describe your project:", 
"Provide instructions and examples for use:",
"Do you want to add screenrec?",
"Input screenshot path:",
"Provide credits:",
"Provider licence info"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },

            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },

            {
                type: 'input',
                message: questions[2],
                name: 'instructions',
            },

            {
                type: 'list',
                message: questions[3],
                name: 'screenshotNeeded',
                choices: ["yes", "no"]
            },
            
            {
                type: 'input',
                message: questions[4],
                name: 'screenshotPath',
                when: (answers) => answers.screenshotNeeded === "yes"
            },
            {
                type: 'input',
                message: questions[5],
                name: 'credits',
            },

            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ["The MIT license", "Mozilla Public License 2.0","Apache 2.0 License","Boost Software License 1.0","No license"]
            }

        ]
    )
    .then((answers)=>{
        console.log(answers);
    });
}

// Function call to initialize app
init();
