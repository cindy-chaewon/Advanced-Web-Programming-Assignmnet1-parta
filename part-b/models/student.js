const Person = require('./person');

class Student extends Person {
    constructor(id, name, age, major, gpa) {
        super(id, name, age);
        this.major = major;
        this.gpa = gpa;
    }

    getInfo() {
        return `${super.getInfo()}, Major: ${this.major}, GPA: ${this.gpa}`;
    }
}

module.exports = Student;
