const express = require('express');
const { registerNGO, loginNGO } = require('../controllers/ngoController');  // Ensure the path is correct

const router = express.Router();

// Route to register a new NGO
router.get('/register', registerNGO);
router.get('/login',loginNGO)

module.exports = router;
