const Volunteer = require("../models/Volunteer");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const mongoose = require("mongoose");

// Method for updating a volunteer's profile
exports.updateVolunteerProfile = async (req, res) => {
  try {
    const { name = "", password = "", ngoName = "" } = req.body;
    const id = req.user.id;

    // Find the volunteer by id
    const volunteer = await Volunteer.findById(id);

    // Update the volunteer fields
    volunteer.name = name;
    volunteer.password = password;
    volunteer.ngoName = ngoName;

    // Save the updated profile
    await volunteer.save();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      volunteer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Method for deleting a volunteer's account
exports.deleteVolunteerAccount = async (req, res) => {
  try {
    const id = req.user.id;

    const volunteer = await Volunteer.findById(id);
    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    // Delete the volunteer
    await Volunteer.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Volunteer cannot be deleted successfully" });
  }
};

// Method for getting volunteer details
exports.getVolunteerDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const volunteerDetails = await Volunteer.findById(id);

    res.status(200).json({
      success: true,
      message: "Volunteer data fetched successfully",
      data: volunteerDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Method for updating a volunteer's password
exports.updateVolunteerPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const id = req.user.id;

    const volunteer = await Volunteer.findById(id);
    volunteer.password = password;

    await volunteer.save();

    res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Method for getting the NGOs a volunteer is working with
exports.getVolunteerNGOs = async (req, res) => {
  try {
    const id = req.user.id;
    const volunteer = await Volunteer.findById(id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    res.status(200).json({
      success: true,
      ngos: volunteer.ngoName,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Method for accessing volunteer dashboard (admin only)
exports.volunteerDashboard = async (req, res) => {
  try {
    const volunteerDetails = await Volunteer.find({});

    res.status(200).json({ volunteers: volunteerDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
