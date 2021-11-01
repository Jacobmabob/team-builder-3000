const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const employeeArray = []


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
                case 'I am finished building my team':
                    console.log(employeeArray);
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

function generateHtml() {

};

createManager();
// createEngineer();
// createIntern();
