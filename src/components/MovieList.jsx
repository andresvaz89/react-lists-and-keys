import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <div>
      <h2>MovieList</h2>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          movies={movies}
          setMovies={setMovies}
        />
      ))}
    </div>
  );
};

export default MovieList;
