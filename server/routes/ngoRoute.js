const express = require('express');
const { registerNGO } = require('../controllers/ngoController');  // Ensure the path is correct

const router = express.Router();

// Route to register a new NGO
router.post('/register', registerNGO);

module.exports = router;
