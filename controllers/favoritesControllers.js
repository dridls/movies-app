const getFavorites = (req, res) => {
  res.render("/favorites.ejs");
};

const getMovies = (req, res) => {
  res.render("/movies.ejs");
};

const removeFavorite = (req, res) => {
  res.send(req.user);
  User.findOne({ _id: req.user });
};

const addFavorite = (req, res) => {
  res.send(req.user);
  User.findOne({ _id: req.user });
};

module.exports = { getFavorites, removeFavorite, addFavorite, getMovies };

// Add token to the header that has to work once logged in
