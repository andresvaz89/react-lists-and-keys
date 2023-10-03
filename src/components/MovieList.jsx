import { useState } from 'react';
import moviesData from '../movies-data.json';

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

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
    <div>
      <h2>MovieList</h2>
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>
            <button
              className="btn-delete"
              onClick={() => deleteMovie(movie._id)}
            >
              Delete{' '}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
