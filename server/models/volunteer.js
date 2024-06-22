const mongoose=require("mongoose")

const volunteerSchema=new mongoose.Schema({
    name: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	ngoName: {
		type: String,
		required: true,
		trim: true,
	},
})

module.exports = mongoose.model("Volunteer", volunteerSchema);