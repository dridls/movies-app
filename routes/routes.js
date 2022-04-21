const router = require("express").Router();
const { registerValidation, loginValidation } = require("./validation");
const authController = require("../controllers/authControllers");
const favoritesController = require("../controllers/favoritesControllers");
const moviesController = require("../controllers/moviesControllers")
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/register", authController.getRegisterPage);
router.post("/register", authController.createUser);
router.get("/login", authController.getLoginPage);
router.post("/login", authController.login);
router.get("/favorites", favoritesController.getFavorites);
router.delete("/favorites", favoritesController.removeFavorite);
router.get("/movies", favoritesController.getMovies);
router.post("/movies", favoritesController.addFavorite);

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     //a passport function
//     return next();
//   }
//   res.redirect("/movies");
// }

// function isNotLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect("/");
//   }
//   next();
// }

module.exports = router;
