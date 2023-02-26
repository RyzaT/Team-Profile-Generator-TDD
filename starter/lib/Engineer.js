// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import the employee parent class
const Employee = require("./Employee")

//Engineer is an extension of emlpoyee class
class Engineer extends Employee{
    constructor({name, id, email, github}) {
        super({name, email, id}); // gets info from parent
        this.github = github; // adds github username
        this.role = "Engineer"; // 'role' will define job role
    }
    // return github user profile
    getGithub(){
        return this.github;
    }
    // return role 
    getRole(){
        return this.role
    }
}