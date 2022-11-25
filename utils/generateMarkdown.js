// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenceBadge;
  switch (license) {
    case "The MIT license":
      return licenceBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Mozilla Public License 2.0":
      return licenceBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    case "Apache 2.0 License":
      return licenceBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "Boost Software License 1.0":
      return licenceBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "No license":
      return licenceBadge = "";
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink;
  switch (license) {
    case "The MIT license":
      return licenceLink = "(https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      return licenceLink = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache 2.0 License":
      return licenceLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      return licenceLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "No license":
      return licenceLink = "";
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `### ${license}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title} ${renderLicenseBadge(data.license).substring(1,renderLicenseBadge(data.license).length-1)}
  
## Description
  
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test instructions](#test-instructions)
- [License](#tlicense)
- [Questions](#questions)

## Installation

${data.instructions}
  
## Usage
  
${data.usage}
### Screen record (pic. 1)
${(data.screenrecNeeded==="yes")?
`<video width="640" height="480" controls>
  <source src="https://github.com/kas500/README-generator/blob/main/${data.screenrecName}" type="video/mp4">
</video>'`:"N/A"}
  
## Contributing

${data.contribution}

## Test instructions

${data.tests}

## License

${renderLicenseSection(data.license)}

## Questions

If you have any questions please contact me any time!

My GitHhub: <https://github.com/${data.githubAccount}>

My email: <${data.email}>`;
}

module.exports = generateMarkdown;
