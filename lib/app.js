const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// const generateHtml = require("./generateHtml");
// const generateEmployeeCards = require("./generateHtml");

const employeeArray = []
const html = []

function generateEmployeeCards(array) {
    array.forEach(element => {
        const role = element.getRole()
        
        switch (role) {
            case 'Manager':
               const manager = `
                <article class="message">
                    <div class="message-body">
                        <p class="title">${element.name}</p>
                        <span class="tag is-black mb-1">${element.getRole()}</span>
                        <p>Employee ID: ${element.id}</p>
                        <p>Office Number: ${element.officeNumber}</p>
                        <a href="${element.email}">${element.email}</a>
                    </div>
                </article>   
            ` 
            html.push(manager);
            break
            case 'Engineer':
                const engineer = `
                <article class="message">
                    <div class="message-body">
                        <p class="title">${element.name}</p>
                        <span class="tag is-black mb-1">${element.getRole()}</span>
                        <p>Employee ID: ${element.id}</p>
                        <p>Github Profile:<a href="https://github.com/${element.github}"> ${element.github}</a></p>
                        <a href="${element.email}">${element.email}</a>
                    </div>
                </article>   
                ` 
                html.push(engineer);
            break
            case 'Intern':
                const intern = `
                <article class="message">
                    <div class="message-body">
                        <p class="title">${element.name}</p>
                        <span class="tag is-black mb-1">${element.getRole()}</span>
                        <p>Employee ID: ${element.id}</p>
                        <p>School: ${element.school}</p>
                        <a href="${element.email}">${element.email}</a>
                    </div>
                </article>   
               ` 
               html.push(intern);
            break
    }

    });
}

function generateHtml(html) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Builder 3000</title>
</head>
<body>
    <section class="hero is-dark">
        <div class="hero-body">
          <p class="title">
            Team Builder 3000
          </p>
          <p class="subtitle">
            Revolutionary software!
          </p>
        </div>
      </section>
      <section class="section is-large p-5 mx-5">
        ${html.join("\r\n")}
      </section>

    
</body>
</html>
    `
}



function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your team manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your team manager's employee ID number?"
            },
            {
                type: "input",
                name: "managerEmailAddress",
                message: "What is your team manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your team manager's office number?"
            },
        ])
        .then((answers) => {
            const {managerName, managerId, managerEmailAddress, managerOfficeNumber} = answers;
            const manager = new Manager(managerName, managerId, managerEmailAddress, managerOfficeNumber);
            employeeArray.push(manager);
            createMenu();
        });
};

function createMenu() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Select your next step from the list below:',
            name: 'menu',
            choices: ['Add an Engineer', 'Add an Intern', 'I am finished building my team']
        }])
        .then((answers) => {
            switch (answers.menu) {
                case 'Add an Engineer':
                    createEngineer();
                    break
                case 'Add an Intern':
                    createIntern();
                    break
                case 'I am finished building my team.':
                    generateEmployeeCards(employeeArray);
                    const htmlReturn = generateHtml(html);
                    
                    fs.writeFile('GeneratedHtml.html', htmlReturn, (err) =>
                          err ? console.log(err) : console.log('Successfully created your page!')
                        );
                    ;
                    break
            }
        })
};

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineers's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's employee ID number?"
            },
            {
                type: "input",
                name: "engineerEmailAddress",
                message: "What is your engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's github username?"
            },
        ])
        .then((answers) => {
            const {engineerName, engineerId, engineerEmailAddress, engineerGithub} = answers;
            const engineer = new Engineer(engineerName, engineerId, engineerEmailAddress, engineerGithub);
            employeeArray.push(engineer);
            createMenu();
        });

};

function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's employee ID number?"
            },
            {
                type: "input",
                name: "internEmailAddress",
                message: "What is your intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Where did your intern go to school?"
            },
        ])
        .then((answers) => {
            const {internName, internId, internEmailAddress, internSchool} = answers;
            const intern = new Intern(internName, internId, internEmailAddress, internSchool);
            employeeArray.push(intern);
            createMenu();
        });

};




createManager();

// createEngineer();
// createIntern();
