const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");

// import templates dir
const templateDir = path.resolve(__dirname, "../templates");

// generate html and declare an empty array
const generateHTML = (employees) => {
    const HTML = [];
    // employees array filtered by role and function to create employee type and then pushed to HTML aray
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderEngineer(engineer))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderIntern(intern))
    );
    console.log(HTML, "generateHTML.js");
    // Objects in HTML are passed to render markdown
    return renderMarkdown(HTML.join(""));
};
// Placeholders for manager with user inputs

const renderManager = (manager)=> {
    let template = fs.readFileSync(
        path.resolve(templateDir, "manager.html"),"utf8"
    );
template = replaceTemplate(template, "name", manager.getName());
template = replaceTemplate(template, "id", manager.getId());
template = replaceTemplate(template, "role", manager.getRole());
template = replaceTemplate(template, "email", manager.getEmail());
template = replaceTemplate(template, "office", manager.getOffice());
return template;
};

// And for engineers

const renderEngineer = (engineer)=> {
    let template = fs.readFileSync(
        path.resolve(templateDir, "engineer.html"),"utf8"
    );
template = replaceTemplate(template, "name", engineer.getName());
template = replaceTemplate(template, "id", engineer.getId());
template = replaceTemplate(template, "role", engineer.getRole());
template = replaceTemplate(template, "email", engineer.getEmail());
template = replaceTemplate(template, "github", engineer.getGithub());
return template;
};