const express = require('express');
const router = express.Router();
let students = require('../data/students');

router.get('/', (req, res) => {
    res.status(200).json(students);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

router.post('/', (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({ message: "Invalid Input" });
    }

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    
    const newStudent = {
        id: newId,
        name,
        course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({ message: "Invalid Input" });
    }

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    students[studentIndex] = { id, name, course };
    res.status(200).json(students[studentIndex]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    students.splice(studentIndex, 1);
    res.status(200).json({ message: "Student removed successfully" });
});

module.exports = router;
