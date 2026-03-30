const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, 'students.json');

const readData = () => {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
};

const writeData = async (data) => {
    await fsPromises.writeFile(dataFilePath, JSON.stringify(data, null, 2));
};

const getAllStudents = () => {
    return readData();
};

const getStudentById = (id) => {
    const students = readData();
    return students.find(student => student.id === id);
};

const addStudent = async (student) => {
    const students = readData();
    students.push(student);
    await writeData(students);
    return student;
};

const deleteStudent = async (id) => {
    const students = readData();
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return null;
    const deleted = students.splice(index, 1)[0];
    await writeData(students);
    return deleted;
};

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    deleteStudent
};
