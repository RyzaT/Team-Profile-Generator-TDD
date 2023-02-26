const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create manager 1st?

// Create employees
const employees =[]; // puts employees as an empty array

// Need to allow team to be compleated
let teamCompleate = false

// function to initialise the app
const init = async()=>{
    await createManager();
    // Employee Questions
    const employeeQuestions = [
        {
            type: "list",
            message: "Which type of employee do you wish to add?",
            name: "employeeType",
            choices: [
                {name:"Engineer", value:"engineer"},
                {name:"Intern", value:"intern"},
                {name:"None", value:"none"},
            ]
        }
    ]
    // generate questions
    const {employeeType} = await inquirer.createPromptModule(employeeQuestions);
    // 'none' compleates team
    if(employeeType === "none"){
        teamCompleate = true; 
    }else {
        if (employeeType === "engineer"){
            await createEngineer();
        }
        if (employeeType === "intern"){
            await createIntern();
        }
    }
}
// Pass employee array to generate html
const HTML = generateHTML(employees);
fs.writeFileSync("team-profile.html", HTML,  (err)=>{
    if (err){
        console.log(err); // to log is theres an error

    }else{
        console.log("HTML created succesfully");
    }
    });