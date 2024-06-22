// 
const express=require("express");
const app = express();
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

//import routes
const customerRoute=require('./routes/customerRoute');
const ngoRoute=require('./routes/ngoRoute');


const PORT=4000;

// Connecting to database
database.connect();
// Middlewares
app.use(express.json());

// Connecting to cloudinary
cloudinaryConnect();


//set up backend routes
app.use("/customer",customerRoute);
app.use("/ngo",ngoRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.