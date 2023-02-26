// TODO: Write code to define and export the Employee class
class Employee {
    constructor ({name, id, email}){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // retrieve the name for employee input
    getName(){
        return this.name;
    }
    // retrieve the id for employee input
    getId(){
        return this.id;
    }
    // retrieve the email for employee input
    getEmail(){
        return this.email;
    }
}
// Export employee data for generateing html
module.exports = Employee;