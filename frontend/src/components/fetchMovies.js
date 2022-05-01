// Images URL https://image.tmdb.org/t/p/original/

URL =
  "https://api.themoviedb.org/3/movie/550?api_key=f18597d8c141bf12c7dcddac479fae6f";

fetch(URL, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


 <div className='movieGrid'>
            {movies.map((item) => {
                return (
                    <MovieTile
                     movie = {item}
                    />
                )
            })}
        </div>
.movieGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  place-items: center;
}

function MovieTile(props) {
    return(
        <div>
             <h3>{props.title}</h3>
             <img src={props.poster} alt='movie-poster'/>
             <Buttons />
             <p>{props.year}</p>
             <p>{props.category}</p>
             <p>{props.rating}</p>
             <a href="#">Read more...</a>
        </div>         
    )
}