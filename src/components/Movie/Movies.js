import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovieButton from './AddMovieButton';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
    $("#success-alert").hide();
  }, []);

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
    MovieService.addMovie(movie);
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
    MovieService.deleteMovie(id);
  }

  const rateMovie = (id, rating) => {
    const movieToRate = movies.find(movie => movie.id === id);
    movieToRate.ratings.push(rating);
    setMovies(movies.map(movie => movie.id === id ? movieToRate : movie));
    MovieService.setMovies(movies);

    $("#success-alert").fadeTo(2000, 800).slideUp(800, function() {
      $("#success-alert").slideUp(800);
    });
  }

  return (
    <div className="container-fluid">
      <AddMovieButton addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} rateMovie={rateMovie} />
      <div className="alert alert-success bottom-right-alert" id="success-alert" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>You have rated movie successfully.</p>
      </div>
    </div>
  );
}

export default Movies;
