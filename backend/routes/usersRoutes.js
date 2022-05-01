const router = require("express").Router();
const usersController = require("../controllers/usersController");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    //a passport function
    return next();
  }
  res.redirect("/");
}

function isNotLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

router.post("/register", isNotLoggedIn, usersController.createUser);
router.post("/login", isNotLoggedIn, usersController.checkUser);
router.post("/favorites", isLoggedIn, usersController.checkUser);

module.exports = router;
