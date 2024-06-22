const NGO = require('../models/ngoModel');

// Function to register a new NGO
const registerNGO = async (req, res) => {
  try {
    const { id, name, email, location, phoneNum, password } = req.body;

    // Check if all required fields are provided
    if (!id || !name || !email || !location || !phoneNum || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if an NGO with the same id or email already exists
    const existingNGO = await NGO.findOne({ $or: [{ id }, { email }] });
    if (existingNGO) {
      return res.status(400).json({ message: 'NGO with the same ID or email already exists' });
    }

    // Create a new NGO
    const newNGO = new NGO({ id, name, email, location, phoneNum, password });
    await newNGO.save();

    // Respond with the created NGO details
    res.status(201).json(newNGO);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to login an NGO
const loginNGO = async (req, res) => {
  try {
    const { id, password } = req.body;

    // Check if both id and password are provided
    if (!id || !password) {
      return res.status(400).json({ message: 'ID and password are required' });
    }

    // Find the NGO by id and password
    const ngo = await NGO.findOne({ id, password });
    if (!ngo) {
      return res.status(400).json({ message: 'Invalid ID or password' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'Login successful', ngo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerNGO, loginNGO };
