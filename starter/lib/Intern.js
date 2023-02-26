// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Import the employee parent class
const Employee = require("./Employee")

//Engineer is an extension of emlpoyee class
class Intern extends Employee{
    constructor({name, id, email, school}) {
        super({name, email, id}); // gets info from parent
        this.school = school; // adds school
        this.role = "Intern"; // 'role' will define job role
    }
    // return github user profile
    getSchool(){
        return this.school;
    }
    // return role 
    getRole(){
        return this.role
    }
}
// export intern class
module.exports = Intern;