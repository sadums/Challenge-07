const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a title for your README.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description for your README.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions for your README.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter usage information for your README.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines for your README.',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Enter test instructions for your README.',
            name: 'tests'
        }
    ])
    .then((response) => {
        
    });