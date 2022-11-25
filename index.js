// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is your project title?",
"Describe your project:",
"Provide an installation instructions:",
"Provide a usage instructions:",
"Do you want to add a screen record?",
"Input screen record file name:",
"Provide a contribution guidelines:",
"Provide a test instructions:",
"Provider licence info:",
"Enter your Github name:",
"Enter your e-mail:"]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
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
                type: 'input',
                message: questions[3],
                name: 'usage',
            },

            {
                type: 'list',
                message: questions[4],
                name: 'screenrecNeeded',
                choices: ["yes", "no"]
            },
            
            {
                type: 'input',
                message: questions[5],
                name: 'screenrecName',
                when: (answers) => answers.screenrecNeeded === "yes"
            },

            {
                type: 'input',
                message: questions[6],
                name: 'contribution',
            },

            {
                type: 'input',
                message: questions[7],
                name: 'tests',
            },

            {
                type: 'list',
                message: questions[8],
                name: 'license',
                choices: ["The MIT license", "Mozilla Public License 2.0","Apache 2.0 License","Boost Software License 1.0","No license"]
            },

            {
                type: 'input',
                message: questions[9],
                name: 'githubAccount',
            },

            {
                type: 'input',
                message: questions[10],
                name: 'email',
            }

        ]
    )
    .then((answers)=>{
        let readmeContent = generateMarkdown(answers);
        writeToFile("README.md",readmeContent);
    });
}

// Function call to initialize app
init();
