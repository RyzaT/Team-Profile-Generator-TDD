// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import the employee parent class
const Employee = require("./Employee")

//Engineer is an extension of emlpoyee class
class Manager extends Employee{
    constructor({name, id, email, office}) {
        super({name, email, id}); // gets info from parent
        this.office = office; // adds office
        this.role = "Team Manager"; // 'role' will define job role
    }
    // return github user profile
    getOffice(){
        return this.office;
    }
    // return role 
    getRole(){
        return this.role
    }
}
// export engineer class
module.exports = Manager;