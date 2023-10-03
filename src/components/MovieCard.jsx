function MovieCard(props) {
  const { movie, movies, setMovies } = props;
  const deleteMovie = (movieId) => {
    //find a specific movie in the state variable 'movies'
    /*     const movieToRemove = movies.find((movie) => movie._id === movieId);
    console.log(movieToRemove); */
    //remove it from a copy of the array
    const copyOfMovies = [...movies];
    const updatedMovies = copyOfMovies.filter((movie) => movie._id !== movieId);
    console.log('updatedMovies', updatedMovies);
    setMovies(updatedMovies);
    // updating the state variable 'movies' with our copied array
  };
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
