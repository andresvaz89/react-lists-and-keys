import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (selectedMovie) => {
    const updatedMovies = movies.filter((movie) => movie !== selectedMovie);

    // updating the state variable 'movies' with our copied array
    setMovies(updatedMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  return (
    <div>
      <h2>MovieList</h2>

      <button onClick={toggleShowMovies}>
        {showMovies ? 'Hide Movies' : 'Show Movies'}
      </button>

      {showMovies &&
        movies.map((movie) => {
          return (
            <MovieCard key={movie._id} movie={movie} onDelete={deleteMovie} />
          );
        })}
    </div>
  );
};

export default MovieList;
