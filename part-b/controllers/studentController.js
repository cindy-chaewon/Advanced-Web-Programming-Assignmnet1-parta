const { v4: uuid } = require('uuid');
const Student = require('../models/student');
const studentData = require('../data/studentData');

const getAllStudents = (req, res) => {
    const students = studentData.getAllStudents();
    res.json(students);
};

const getStudent = (req, res) => {
    const student = studentData.getStudentById(req.params.id);
    if (!student) {
        return res.status(404).json({ message: `Student ID ${req.params.id} not found` });
    }
    res.json(student);
};

const createStudent = async (req, res) => {
    const { name, age, major, gpa } = req.body;

    if (!name || !age || !major || !gpa) {
        return res.status(400).json({ message: 'Name, age, major, and gpa are required' });
    }

    const id = uuid();
    const newStudent = new Student(id, name, parseInt(age), major, parseFloat(gpa));

    console.log(newStudent.getInfo());
    console.log(`Is instance of Student: ${newStudent instanceof Student}`);
    console.log(`Is instance of Person: ${newStudent instanceof require('../models/person')}`);

    await studentData.addStudent({
        id: newStudent.id,
        name: newStudent.name,
        age: newStudent.age,
        major: newStudent.major,
        gpa: newStudent.gpa
    });

    res.status(201).json(newStudent);
};

const deleteStudent = async (req, res) => {
    const deleted = await studentData.deleteStudent(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: `Student ID ${req.params.id} not found` });
    }
    res.json({ message: `Student ${deleted.name} deleted`, student: deleted });
};

module.exports = {
    getAllStudents,
    getStudent,
    createStudent,
    deleteStudent
};
