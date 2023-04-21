// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(
      / /g,
      "%20"
    )}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// this link is a table o fcontents link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `
- [License](#license)
`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n This project is licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Contributing](#Contributing)
  ${renderLicenseLink(data.license)}
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions

  If you have any questions, you can email at ${data.email}
  To see more of my work, you can go to [${
    data.github
  }](https://www.github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
