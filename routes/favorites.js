const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");

router.get("/favorites", verify, (req, res) => {
  res.send(req.user);
  User.findOne({ _id: req.user });
});

module.exports = router;

// Add token to the header that has to work once logged in
