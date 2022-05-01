const Movie = ({ movieName, movieYear, posterURL }) => {
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${posterURL}`}
        className="poster"
        alt=""
      />
      <h3 className="movie-name">{movieName}</h3>
      <h4 className="movie-year">{movieYear}</h4>
    </div>
  );
};

export default Movie;
