import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie, rateMovie }) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  }, []);

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <div>
          <button className="btn badge badge-danger badge-pill float-right delete-badge grow" onClick={() => deleteMovie(movie.id)}>
                <i className="fa fa-times"></i>
              </button>
          <img className="card-img-top" src={movie.imageUrl} alt="" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="row justify-content-between my-1">
            <div className="ml-2">
              <StarRating rating={calculateRating(movie.ratings)} rateMovie={rateMovie} id={movie.id} />
            </div>
            <div className="card-footer-badge badge badge-primary badge-pill" 
              data-toggle="tooltip"
              data-placement="bottom"
              title={movie.ratings.length + ' votes'}>
                {calculateRating(movie.ratings)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const calculateRating = ratings => {
  if (ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((result, current) => result + current, 0);
  const rating = sum / ratings.length;
  return Math.round(rating * 10) / 10; 
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
