// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Customer Controllers
const {
  createCustomer,
  editCustomer,
  getAllCustomers,
  getCustomerDetails,
  deleteCustomer,
} = require("../controllers/customerController");

// Importing Middlewares
// const { auth, isAdmin } = require("../middleware/auth");



// Create a new customer
router.post("/createCustomer",createCustomer);

// Edit customer details
router.post("/editCustomer", editCustomer);

// Get all customers
router.get("/getAllCustomers", getAllCustomers);

// Get details of a specific customer
router.post("/getCustomerDetails", getCustomerDetails);

// Delete a customer
router.delete("/deleteCustomer", deleteCustomer);

module.exports = router;
