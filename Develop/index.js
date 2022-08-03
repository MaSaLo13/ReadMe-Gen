const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function


const generateMarkdown2 = ({ title, description, installation, usage, contributing, tests, githubName, email, License }) =>
  `# ${title}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
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
  ## Questions
    [GitHub](https://github.com/${githubName})
    - Email: ${email}

  ${License}`;

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
            type: "list",
            name: "License",
            message: "Please select a license from the list below.",
            choices: ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"]
          },
      ])
    // Use writeFileSync method to use promises instead of a callback function

    
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown2(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
