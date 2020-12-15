import React from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie }) => (
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
            <StarRating rating={0} />
          </div>
          <div>
            <div className="card-footer-badge badge badge-primary badge-pill mx-3">{0}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
