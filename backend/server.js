const express = require("express");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes/usersRoutes");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

mongoose
  .connect(process.env.DB_SERVER)
  .then(() => console.log("Connected to DB server"))
  .catch((err) => console.log(err));

const port = 8765;
app.listen(port, () => console.log(`Server Up and running at ${port}`));
