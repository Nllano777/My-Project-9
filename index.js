// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log("This is a Functional README generator. To continue please follow the steps below:")

//create an array of questions for user input
const Questions = [
    {
        type: 'input',
        name: 'Credits',
        message: 'Provide your Name',
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log('Provide your name...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub username:',
        validate: Github => {
            if (Github) {
                return true;
            } else {
                console.log('Provide your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of this project?',
        validate: Title => {
            if (Title) {
                return true;
            }
            else {
                console.log('Provide your project name...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'describe your project',
        validate: description => {
            if (description) {
                return true;
            }
            else {
                console.log('Provide your project description...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'URL',
        message: 'Provide your deployed GitHUb link of this project.',
        validate: Link => {
            if (Link) {
                return true;
            }
            else {
                console.log('Provide your GitHub project link...');
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'Repo',
        message: 'Provide your GitHUb Repository link for this project.',
        validate: RepoLink => {
            if (RepoLink) {
                return true;
            }
            else {
                console.log('Provide your GitHub Repository project link...');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['HTML', 'javascript', 'React', 'Angular', 'CSS', 'jQuery', 'Ruby', 'Python', 'Node', 'else']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Are There any installation instructions for your project? if so please provide detailed documentation.',
        validate: Installation => {
            if (Installation) {
                return true;
            } else {
                console.log('provide installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributions => {
            if (contributions) {
                return true;
            } else {
                console.log('provide instructions on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address:',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log('Provide your email...');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: true
    },
    {
        type: "list",
        name: "License",
        message: "Please select the license you used for this project.",
        choices: [
            "NONE",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ]
    }];

// Use writeFile method imported from fs.promises to use promises instead of
// a callback function
// TODO: Create a function to write README file
const DevelopREADME = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Success, created file!')
            });
        })
    })
};

// Initialize app
const init = () => {
    return inquirer.prompt(Questions);
};

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeInfo => {
        return DevelopREADME(readmeInfo);
    })
    .catch(err => {
        console.log(err);
    });
