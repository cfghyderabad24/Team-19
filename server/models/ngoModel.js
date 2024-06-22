// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const ngoSchema = new mongoose.Schema({
  // Define the name field with type String, required, and trimmed
  id: {
    type: Number,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // Define the email field with type String, required, and trimmed
  email: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNum: {
    type: Number,
    required: true,
    trim: true,
  },
  // Define the password field with type String and required
  password: {
    type: String,
    required: true,
  },
  // Add timestamps for when the document is created and last modified
});

module.exports = mongoose.model("ngo", ngoSchema);