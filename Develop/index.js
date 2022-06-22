// // TODO: Include packages needed for this application


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function



const generateMarkdown2 = ({ title, description, installation, usage, contributing, tests, githubName, email, license  }) =>
  `# ${title}

  ## Table of Contents 
    - Description
    - Installation
    - Usage 
    - Contributing
    - Tests
    - Questions
  ## Description 
      - ${description}
  ## Installation
  - ${installation}
  ## Usage
    - ${usage}
  ## Contributing
    - ${contributing}
  ## Tests
    - ${tests} 
  ##  

  ## Questions
    - Github username: ${githubName}
    - Email: ${email}`;

// Bonus using writeFileSync as a promise
const init = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Write a description?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Installation?',
        },
        {
          type: 'input',
          name: 'Usage',
          message: 'Usage?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Contributing?',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Tests?',
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'email?',
          },
          {
            type: 'list',
            message: 'Choose what type of license you want to use',
            name: 'License',
            choices: ['IBM', 'MIT', 'Mozilla'],
          },
      ])
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown2(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
