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
} = require("../controllers/Customer");

// Importing Middlewares
// const { auth, isAdmin } = require("../middleware/auth");



// Create a new customer
router.post("/createCustomer", auth, isAdmin, createCustomer);

// Edit customer details
router.post("/editCustomer", auth, isAdmin, editCustomer);

// Get all customers
router.get("/getAllCustomers", auth, isAdmin, getAllCustomers);

// Get details of a specific customer
router.post("/getCustomerDetails", auth, isAdmin, getCustomerDetails);

// Delete a customer
router.delete("/deleteCustomer", auth, isAdmin, deleteCustomer);

module.exports = router;
