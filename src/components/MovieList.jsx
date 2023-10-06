import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (selectedMovie) => {
    const updatedMovies = movies.filter((movie) => movie !== selectedMovie);

    // updating the state variable 'movies' with our copied array
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h2>MovieList</h2>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onDelete={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;
