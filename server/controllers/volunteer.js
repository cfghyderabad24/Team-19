// Example in ../controllers/volunteer.js
const Volunteer = require('../models/Volunteer'); // Ensure correct path to Volunteer model

exports.registerVolunteer = async (req, res) => {
  try {
    const { name, password, ngoName } = req.body;

    // Check if all required fields are provided
    if (!name || !password || !ngoName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if a volunteer with the same name already exists
    const existingVolunteer = await Volunteer.findOne({ name });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'Volunteer with the same name already exists' });
    }

    // Create a new volunteer
    const newVolunteer = new Volunteer({ name, password, ngoName });
    await newVolunteer.save();

    // Respond with the created volunteer details
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
