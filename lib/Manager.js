const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, officeNumber){
        super(name, id, "Manager");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

// var Marissa = new Manager("Marissa", 2, 5);
// console.log(Marissa.getRole())

module.exports = Manager;