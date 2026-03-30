class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }
}

module.exports = Person;
