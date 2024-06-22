// 
const express=require("express");
const app = express();
const database = require("./config/database");

//import routes


const PORT=4000;

// Connecting to database
database.connect();
// Middlewares
app.use(express.json());
app.use(cookieParser());

//set up backend routes


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