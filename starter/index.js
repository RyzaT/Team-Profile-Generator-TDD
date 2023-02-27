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

inquirer.prompt([{

    managerQuestions : [
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
    ]
}])
// populate manager info
function createManager() {
    inquirer.prompt(managerQuestions).then((response) => {
        employees.push(
            new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOffice,
            )
        );
        promptForNextEmployee();
    });
}
const employeeQuestions = [
    {
        type: "list",
        message: "Which type of employee do you wish to add?",
        name: "employeeType",
        choices: [
            { name: "Engineer", value: "engineer" },
            { name: "Intern", value: "intern" },
            { name: "None", value: "none" },
        ]
    }
]

// prompt for next employee ()
function promptForNextEmployee() {
    console.log()
    inquirer.prompt(employeeQuestions)
        //choice of 3

        .then((response) => {
            if (response.option === "Engineer") {
                createEngineer();
            } else if (response.option === "Intern") {
                    createIntern();
                }
                else {
                    if(!fs.existsSync(OUTPUT_DIR)) {
                        fs.mkdirSync(OUTPUT_DIR);
                    };
                    fs.writeFile(outputPath, render(employees), (err) =>
                    err ? console.log(err) : console.log("Your Team has been Created")
                    );
                };   
        });
}


inquirer.prompt([{
    // engineer questions
    engineerQuestions : [
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
    ]
}
])
function createEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        employees.push(
            new Engineer(
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub,
            )
        );
        promptForNextEmployee();
    });
}

inquirer.prompt([{
    // intern questions
    internQuestions : [
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
    ]
}
    ])

function createIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        employees.push(
            new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool,
            )
        );
        promptForNextEmployee();
    })
};


createManager();

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
// init();