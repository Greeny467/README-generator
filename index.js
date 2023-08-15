// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type:'input',
                message:'What is the name of your project?',
                name:'projectName'
            },
            {
                type:'input',
                message:'Write out a description of your project',
                name:'projectDescription'
            },
            {
                type:'input',
                message:'What is the installation process, if any?',
                name:'projectInstallation'
            },
            {
                type:'input',
                message:'Write out examples of intended use along with any instructions',
                name:'projectUsage'
            },
            {
                type:'input',
                message:'Give a list of everyone who contributed to the project',
                name:'projectCredits'
            },
            {
                type:'input',
                message:'Write out any contribution guidelines you may have for your project.',
                name:'projectContributionRules'
            },
            {
                type:'input',
                message:'Write out any test instructions necessary',
                name:'projectTest'
            },
            {
                type:'list',
                message:'What license are you using',
                choices:['MIT License', 'Apache 2.0 License', 'GPL-3.0', 'LGPL-3.0'],
                name:'projectLicense'
            },
            {
                type:'input',
                message:'What is your preffered github profile name? Pay attention to spelling',
                name:'gitName'
            },
            {
                type:'input',
                message:'What is your preffered email for contact?',
                name:'emailName'
            }
        ])
        .then((response)=>{
            let fileName = response.projectName.toLowerCase()
            fs.writeFile(`${fileName}.md`,generateMarkdown(response), (err) => err ? console.error(err) : console.log('sucess'))
        })
}

// Function call to initialize app
init();
