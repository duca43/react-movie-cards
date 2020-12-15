import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovieButton from './AddMovieButton';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  }

  return (
    <div className="container-fluid">
      <AddMovieButton addMovie={addMovie} moviesLength={movies.length} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Movies;
