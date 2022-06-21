const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
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
  ]);
};

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
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();