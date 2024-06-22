// Example in server.js
const express = require('express');
const mongoose = require('mongoose');
const volunteerRoutes = require('./routes/volunteer'); // Check path correctness

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/volunteer', volunteerRoutes); // Adjust path as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
