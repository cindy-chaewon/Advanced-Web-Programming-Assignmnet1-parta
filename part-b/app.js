const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/students', require('./routes/studentRoutes'));

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Student Management System API' });
});

module.exports = app;
