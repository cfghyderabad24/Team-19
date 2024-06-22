const mongoose = require("mongoose");

// Define the Tags schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    gender: {
		type: String,
		required: true,
	},
    percentage:{
		type: String,
		required: true,
	},
    college:{
		type: String,
		required: true,
	},
    stream:{
		type: String,
		required: true,
	},
    fathersOccupation:{
		type: String,
		required: true,
	},
    income:{
		type: String,
		required: true,
	},
    residenceArea:{
		type: String,
		required: true,
	},
    NGO:{
		type: String,
		required: true,
	},

});

// Export the Tags model
module.exports = mongoose.model("User", userSchema);
