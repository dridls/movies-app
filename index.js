const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const favoritesRoute = require("./routes/favorites");
dotenv.config();

// Import Routes
const authRoute = require("./routes/auth");

// Middlewares
app.use(express.json());

// Route Middlewares
app.use("/user", authRoute);
app.use("/favorites", favoritesRoute);

//Connect to DB
mongoose.connect(process.env.DB_LOCAL, () => console.log("Connected to DB"));

//moviesapp
const port = 9876;
app.listen(port, () => console.log(`Server Up and running at ${port}`));
