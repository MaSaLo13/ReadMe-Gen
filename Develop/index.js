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



const generateMarkdown = ({ title, description, tableOfContents, installation, usage, contributing, tests, questions, githubName,  }) =>
  `# ${title}

  ## ${description} 
      - By clicking on the Generate Password button a series of prompts will be asked
          - How many characters would you like your password to be? Password must be between 8 - 128 characters.
          - Would you like some lowercase characters?
          - Uppercase letters?
          - Numbers?
          - Special characters?
      - After answering each prompt, a password will be displayed in #password
  ## Installation
  ## Usage
  ## Contributing
  ## Tests 

  ## Screenshot of Password Generator
  ![Screenshot of the Password Generator](./Assets/image/03-javascript-homework-demo.png)
  
  repolink: 
  https://github.com/MaSaLo13/PasswordGenerator
  
  deployed site:
  https://masalo13.github.io/PasswordGenerator/`;

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
          message: 'What is the description?',
        },
        {
          type: 'input',
          name: 'hobby',
          message: 'What is your favorite hobby?',
        },
        {
          type: 'input',
          name: 'food',
          message: 'What is your favorite food?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
        },
        {
          type: 'input',
          name: 'linkedin',
          message: 'Enter your LinkedIn URL.',
        },
      ])
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

// {
//     type: 'list',
//     name: 'license',
//     message: '',
// }