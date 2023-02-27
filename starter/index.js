const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const generateHTML = require("./output/generateHTML");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { info } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create ALL employees
const employees =[]; // puts employees as an empty array

// Need to allow team to be compleated
let teamCompleate = false

// // validate input function
const validateInput = (userInput) => {
    if (userInput === ""){
        return "Please type and answer to continue";
    }else{
        return true;
    }
};

inquirer.prompt([{
     const: createManager = async() => {
        managerQuestions = [
            {
                type: "input",
                message: "Managers Name?",
                name: "name",
                validate: validateInput,
            },
            {
                type: "input",
                message: "Enter employee ID:",
                name: "id",
                validate: validateInput,
            },
            {
                type: "input",
                message: "What's your office number?",
                name: "office",
                validate: validateInput,
            },
            {
                type: "input",
                message: "Enter work Email:",
                name: "email",
                validate: validateInput
            },
        ]}
}]).then(Manager => {
    // populate manager info
    const managerAnswers = inquirer.prompt(managerQuestions);
    // new manager class takes manager answers
    const manager = new Manager(managerAnswers);
    // push manager into employees array
    employees.push(manager);
})
    // prompt for next employee ()
    promptForNextEmployee();

const promptForNextEmployee = () => {
    inquirer.prompt([{
        //choice of 3
        const: employeeQuestions = [
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
    }]).then(employeeType => {
        if(employeeType === "none"){
            teamCompleate = true; 
        }else {
            if (employeeType === "engineer"){
                createEngineer();
            }
            if (employeeType === "intern"){
                createIntern();
            }
        }
    
        //if engineer
        //prompt for engineer
        //else if intern
        // prompt for intern
        // esle
        // use the functionality from page-template to generate the team
    })
}

const createEngineer  = () => {
    inquirer.prompt([{
        // engineer questions
        const: createEngineer = async()=> {
            engineerQuestions =[
                {
                    type: "input",
                    message: "Engineers Name?",
                    name: "name",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Enter employee ID:",
                    name: "id",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Engineers Email:",
                    name: "email",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Engineers GitHub Username:",
                    name: "github",
                    validate: validateInput,
                },
            ]}
    }]).then(Engineer => {
        // add new engineer to employees array
        // answers generated from questions
    const engineerAnswers = inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers);
    // Push engineer into employee array
    employees.push(engineer);
    })
        // prompt for next employee
    
}

const createIntern = () => {
    inquirer.prompt([{
        // intern questions
        const: createIntern = async()=> {
            internQuestions =[
                {
                    type: "input",
                    message: "Intern's Name?",
                    name: "name",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Enter employee ID:",
                    name: "id",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Intern's Email:",
                    name: "email",
                    validate: validateInput,
                },
                {
                    type: "input",
                    message: "Which school is the intern from?",
                    name: "school",
                    validate: validateInput,
                },
            ];
            // answers generated from questions
            
            
        }
    }]).then(Intern => {
        const internAnswers = inquirer.prompt(internQuestions);
            const intern = new Intern(internAnswers);
        // Push intern into employee array
        employees.push(intern);
        // prompt for next employee
    })
}

const buildPage = () => {

}

// --------- Old workings ----------
// function to initialise the app
// const init = async()=>{
//     await createManager();
    
    // Employee Questions
    
    // generate questions
    // const {employeeType} = inquirer.createPromptModule(employeeQuestions);
    // 'none' compleates team
    

// Create manager 1st?

    

// Create engineer

    
// create intern


// Pass employee array to generate html
// const HTML = (employees);
// fs.writeFileSync("team.html", HTML,  (err)=>{
//     if (err){
//         console.log(err); // to log is theres an error

//     }else{
//         console.log("HTML created succesfully");
//     }
//     });


// function writeToFile(__filename, data) {
//     return fs.writeFileSync(path.join(process.cwd(), __filename), data);
// };

// function init() {
//     inquirer.prompt(managerQuestions).then((employeeQuestions) => {
//         console.log("Creating your team");
//         writeToFile("../output", generateTeam(employees));
//     });
// };
    // Function to initialise app
init();