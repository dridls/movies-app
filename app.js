const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.set("view-engine", "ejs");
// Import Routes
const routes = require("./routes/routes");
const movieRoutes = require("./routes/movieRoutes");

dotenv.config();

// Middlewares
app.use(express.json());

// Route Middlewares
app.use("/", routes);

//Connect to DB
mongoose.connect(process.env.DB_LOCAL, () => console.log("Connected to DB"));

//moviesapp
const port = 9876;
app.listen(port, () => console.log(`Server Up and running at ${port}`));
