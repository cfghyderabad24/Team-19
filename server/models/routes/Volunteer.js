const express = require("express");
const router = express.Router();
const { auth, isAdmin } = require("../middleware/auth");
const {
  deleteVolunteerAccount,
  updateVolunteerProfile,
  getVolunteerDetails,
  updateVolunteerPassword,
  getVolunteerNGOs,
  volunteerDashboard,
} = require("../controllers/volunteer");

// Route to delete a volunteer's account
router.delete("/deleteVolunteerAccount", auth, deleteVolunteerAccount);

// Route to update a volunteer's profile
router.put("/updateVolunteerProfile", auth, updateVolunteerProfile);

// Route to get details of a volunteer
router.get("/getVolunteerDetails", auth, getVolunteerDetails);

// Route to update a volunteer's password
router.put("/updateVolunteerPassword", auth, updateVolunteerPassword);

// Route to get the NGOs a volunteer is working with
router.get("/getVolunteerNGOs", auth, getVolunteerNGOs);

// Route to access volunteer dashboard (requires admin access)
router.get("/volunteerDashboard", auth, isAdmin, volunteerDashboard);

module.exports = router;
