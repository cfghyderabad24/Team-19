const Customer = require("../models/customer");

// Function to create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const {
      name,
      gender,
      percentage,
      college,
      stream,
      fathersOccupation,
      income,
      residenceArea,
      NGO
    } = req.body;

    // Check if any of the required fields are missing
    if (
      !name ||
      !gender ||
      !percentage ||
      !college ||
      !stream ||
      !fathersOccupation ||
      !income ||
      !residenceArea ||
      !NGO
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Create a new customer with the given details
    const newCustomer = await Customer.create({
      name,
      gender,
      percentage,
      college,
      stream,
      fathersOccupation,
      income,
      residenceArea,
      NGO,
    });

    // Return the new customer and a success message
    res.status(200).json({
      success: true,
      data: newCustomer,
      message: "Customer created successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the customer
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create customer",
      error: error.message,
    });
  }
};

// Function to edit customer details
exports.editCustomer = async (req, res) => {
  try {
    const { customerId } = req.body;
    const updates = req.body;
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        customer[key] = updates[key];
      }
    }

    await customer.save();

    const updatedCustomer = await Customer.findOne({
      _id: customerId,
    });

    res.json({
      success: true,
      message: "Customer updated successfully",
      data: updatedCustomer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Function to get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find({});

    return res.status(200).json({
      success: true,
      data: allCustomers,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Can't fetch customer data",
      error: error.message,
    });
  }
};

// Function to get one customer details
exports.getCustomerDetails = async (req, res) => {
  try {
    const { customerId } = req.body;
    const customerDetails = await Customer.findOne({
      _id: customerId,
    });

    if (!customerDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find customer with id: ${customerId}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: customerDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Function to delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { customerId } = req.body;

    // Find the customer
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Delete the customer
    await Customer.findByIdAndDelete(customerId);

    return res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
