//1. import all dependencies
// const {faker}=require(`@faker-js/faker`)
const express = require("express");
const app = express();

//2.1 mongoose config
require("./config/mongoose.config");

//2.2 express config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//3. getting the routes
const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);


//4. Listen to port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
