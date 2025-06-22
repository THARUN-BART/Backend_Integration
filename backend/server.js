const express = require('express');
const path = require('path');
const userController = require('./route/app_route');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));// Serve static files from 'public' directory

// API routes
app.use('/api/users', userController);

// Serve the main HTML file at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
    console.log('Task Manager UI available at: http://localhost:5000');
});