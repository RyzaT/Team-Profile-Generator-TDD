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
const { choices } = require("yargs");
// const { info } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create ALL employees
const employees = []; // puts employees as an empty array

// Need to allow team to be compleated
// let teamCompleate = false


// // validate input function
const validateInput = (userInput) => {
    if (userInput === "") {
        return "Please type and answer to continue";
    } else {
        return true;
    }
};

function init() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employees role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "employee",
            message: "What is the employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer.prompt([{
                    type: "input",
                    name: "office",
                    message: "What is the Manager's office number?",
                },
            {
                    type: "confirm",
                    name: "nextEmployee",
                    message: "Would you like to add another employee?",
                    default: false,
            }])
            .then(({office, nextEmployee}) => {
                employees.push(new Manager(employee, id, email, office))
                if (nextEmployee) {
                    return init();
                }
            })
    }else if (role === "Engineer") {
        return inquirer.prompt([{
            type: "input",
            message: "Engineers GitHub Username:",
            name: "github",
        },
        {
            type: "confirm",
            name: "nextEmployee",
            message: "Would you like to add another employee?",
            default: false,
        }])
        .then(({github, nextEmployee}) => {
            employees.push(new Engineer(employee, id, email, github))
            if (nextEmployee) {
                return init();
    }
        })
    }else if (role === "Intern") {
        return inquirer.prompt([{
            type: "input",
            message: "What school do they attend?",
            name: "school",
        },
        {
            type: "confirm",
            name: "nextEmployee",
            message: "Would you like to add another employee?",
            default: false,
        }])
        .then(({school, nextEmployee}) => {
            employees.push(new Intern(employee, id, email, school))
            if (nextEmployee) {
                return init();
    }
        })   
    }});
}    
        



// const managerQuestions = [
//         {
//             type: "input",
//             message: "Managers Name?",
//             name: "name",
//             validate: validateInput,
//         },
//         {
//             type: "input",
//             message: "Enter employee ID:",
//             name: "id",
//             validate: validateInput,
//         },
//         {
//             type: "input",
//             message: "What's your office number?",
//             name: "office",
//             validate: validateInput,
//         },
//         {
//             type: "input",
//             message: "Enter work Email:",
//             name: "email",
//             validate: validateInput
//         },
// ];
// // Employee Questions
// const employeeQuestions = [
//     {
//         type: "list",
//         message: "Which type of employee do you wish to add?",
//         name: "employeeType",
//         choices: [
//             "Engineer",
//             "Intern",
//             "None",       
//     ]
// }];
// // Engineer questions
// const engineerQuestions = [
//     {
//         type: "input",
//         message: "Engineers Name?",
//         name: "name",
//         validate: validateInput,
//     },
//     {
//         type: "input",
//         message: "Enter employee ID:",
//         name: "id",
//         validate: validateInput,
//     },
//     {
//         type: "input",
//         message: "Engineers Email:",
//         name: "email",
//         validate: validateInput,
//     },
//     {
       
//         validate: validateInput,
//     },
// ];

// // Intern Questions
// const internQuestions = [
//     {
//         type: "input",
//         message: "Intern's Name?",
//         name: "name",
//         validate: validateInput,
//     },
//     {
//         type: "input",
//         message: "Enter employee ID:",
//         name: "id",
//         validate: validateInput,
//     },
//     {
//         type: "input",
//         message: "Intern's Email:",
//         name: "email",
//         validate: validateInput,
//     },
//     {
//         type: "input",
//         message: "Which school is the intern from?",
//         name: "school",
//         validate: validateInput,
//     },
// ];


// function to push to template




function generateTeam(data) {
    if (data.role === "Manger") {
        createManager();
    } else if (data.role === "Engineer") {
        createEngineer();
    }else if (data.role === "Intern"){
        createIntern();
    }else {
        teamCompleate();
    }
}
        
            
        
        

    
  

// }])
// populate manager info

// function createManager() {
//         employees.push(
//             new Manager(
//                 response.managerName,
//                 response.managerId,
//                 response.managerEmail,
//                 response.managerOffice,
//             )
//         );
//     };

// To Create Engineer
// function createEngineer() {
//     inquirer.prompt(engineerQuestions).then((response) => {
//         employees.push(
//             new Engineer(
//                 response.engineerName,
//                 response.engineerId,
//                 response.engineerEmail,
//                 response.engineerGithub,
//             )
//         );
//         promptForNextEmployee();
//     });
// }

// To Create Intern
// function createIntern() {
//     inquirer.prompt(internQuestions).then((response) => {
//         employees.push(
//             new Intern(
//                 response.internName,
//                 response.internId,
//                 response.internEmail,
//                 response.internSchool,
//             )
//         );
//         promptForNextEmployee();
//     })
// };

// build page
function generateTeam() {
    buildPage();
}
const buildPage = () => {
    fs.writeFile(outputPath, render(employees), (err) =>
            err ? console.log(err) : console.log("Your Team has been Created")
)
}
    



// inquirer.prompt([{
    // engineer questions

// }
// ])


// inquirer.prompt([{
    // intern questions
 
// }
//     ])




// createManager();

// const buildPage = () => {

// }

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
 init()
 .then(() => {
    return generateTeam(employees)
})