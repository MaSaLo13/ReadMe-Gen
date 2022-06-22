// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === blue) {

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
  ibm `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  mit `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  mozzila `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string 
// may not need it 
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;



// /* I'm assuming you are using jQuery for simplicity sake, but you can do this with straight JS too */
// /* Include this file right before your closing </body> but after you include jQuery */

// $(document).ready(function() {
  
//   // Get the database name. 
//   // This script assumes there is only one, & you don't already have license link
//   // You'll have to account for other situations
  
//   var databaseName = encodeURIComponent($("#DatabaseCL").find("a").text());
  
//  // Do a GET request to grab the HTML for the database license info
//   $.get('http://path/to/get_license.php?database=' + databaseName, function(data) {
      
//       $("#DatabaseCL").append(data);
  
//   });
  
});