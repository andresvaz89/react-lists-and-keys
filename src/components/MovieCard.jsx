function MovieCard(props) {
  const { movie, onDelete } = props;
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      <button onClick={() => onDelete(movie)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
