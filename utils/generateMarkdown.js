// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = null
  if(license === 'MIT License'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache 2.0 License'){
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GPL-3.0'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === 'LGPL-3.0'){
    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  else{
    badge = ''
  }

  return(badge)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = null

  if (license === 'MIT License'){
    licenseLink = 'https://api.github.com/licenses/mit'
  }
  else if (license === 'Apache 2.0 License'){
    licenseLink = 'https://api.github.com/licenses/apache-2.0'
  }
  else if (license === 'GPL-3.0'){
    licenseLink = 'https://api.github.com/licenses/gpl-3.0'
  }
  else if (license === 'LGPL-3.0'){
    licenseLink = 'https://api.github.com/licenses/lgpl-3.0'
  }
  else{
    licenseLink = ''
  }
  return(licenseLink)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseDescription = null

  if (license === 'MIT License'){
    licenseDescription = 'The MIT License is a permissive open-source license that allows you to use, modify, and distribute the software for any purpose, whether commercial or non-commercial. You are free to incorporate the code into your own projects, both open-source and proprietary. The only requirement is that you include the original license and copyright notice in your project. The MIT License is known for its simplicity and flexibility, making it a popular choice for many software projects.'
  }
  else if (license === 'Apache 2.0 License'){
    licenseDescription = 'The Apache License 2.0 is a permissive open-source license that provides you with the freedom to use, modify, and distribute the software in any way you choose, including commercially. One key feature of this license is its strong patent protection, which grants you a patent license from contributors to the software. This license also includes specific terms for contributions, requiring derivative works to be licensed under the same terms when distributed. The Apache License 2.0 is widely used and favored by large projects and corporations.'
  }
  else if (license === 'GPL-3.0'){
    licenseDescription = 'The GNU General Public License 3.0 (GPL-3.0) is a strong copyleft license that ensures any derivative works or modifications of the software remain open source and must be distributed under the same terms. This license is designed to promote collaboration and the sharing of improvements within the open-source community. Projects licensed under GPL-3.0 must make the source code available to users and provide clear attribution to the original authors. If you plan to incorporate GPL-licensed code into your project, your project must also be licensed under GPL-3.0.'
  }
  else if (license === 'LGPL-3.0'){
    licenseDescription = 'The GNU Lesser General Public License 3.0 (LGPL-3.0) is similar to the GPL-3.0 but is designed for libraries and shared code. It allows linking with non-free software under certain conditions, making it suitable for projects where the goal is to allow broader usage in both open-source and proprietary projects. Like the GPL-3.0, derivative works must be licensed under LGPL-3.0, but the rules are less strict for applications using the library. LGPL-3.0 is a great choice for projects that want to promote open collaboration while ensuring compatibility with proprietary software.'
  }
  else{
    licenseDescription = ''
  }

  return(licenseDescription)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.projectLicense)
  let link = renderLicenseLink(data.projectLicense)
  let section = renderLicenseSection(data.projectLicense)

  return `# ${data.projectName}    ${badge}
  ## Description 
  ### ${data.projectDescription}
  ## Installation 
  ### ${data.projectInstallation}
  ## Usage 
  ### ${data.projectUsage}
  ## Credits 
  ### ${data.projectCredits}
  ## Contribution guidelines 
  ### ${data.projectContributionRules}
  ## Test instructions 
  ### ${data.projectTest}
  ## License
  ### ${link}
  ### ${section}
  ## Questions 
  ### GitHub: ${data.gitName}
  ### Email: ${data.emailName}
`;
}

module.exports = generateMarkdown;
