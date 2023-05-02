// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter a title for your README.',
        name: 'title'
    },
    {
        type: 'list',
        message: 'Would you like to include a table of contents?',
        name: 'tableOfContents',
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: 'input',
        message: 'Enter a description.',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Enter credits.',
        name: 'Credits'
    },
    {
        type: 'list',
        message: 'Choose a license for your README.',
        name: 'License',
        choices: [
            "The Unlicense",
            "Mozilla Public License 2.0",
            "MIT License",
            "GNU Lesser General Public License v2.1",
            "GNU General Public License v3.0",
            "GNU General Public License v2.0",
            "Eclipse Public License 2.0",
            "Creative Commons Zero v1.0 Universal",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "Apache License 2.0",
            "GNU Affero General Public License v3.0"
          ]
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter your Github username.',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Wrote data to ${fileName}`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md', generateMarkdown(response)));
}

// Function call to initialize app
init();
