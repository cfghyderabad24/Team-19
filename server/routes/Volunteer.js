const express = require('express');
const { registerVolunteer } = require('../controllers/volunteer');  // Ensure the path is correct

const router = express.Router();

// Route to register a new volunteer
router.post('/register', registerVolunteer);

module.exports = router;
