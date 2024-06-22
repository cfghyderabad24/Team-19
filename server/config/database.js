const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = "mongodb+srv://tyagidaksh741:uGEnhsOcZDXjFgWe@cfg19.zigvxzn.mongodb.net/";

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
