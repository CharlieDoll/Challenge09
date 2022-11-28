// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![github licence](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## description
  ${data.description}
  ## installation
  ${data.instructions}
  ## usage
  ${data.usage}
  ## contributors
  ${data.contributing}
  ## tests
  ${data.tests}
  ## github
  ${data.github}
  ## email
  ${data.email}
  ## license
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
