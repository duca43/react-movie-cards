import React from 'react';
import AddMovieForm from './AddMovieForm';

const AddMovieButton = ({addMovie}) => (
    <div className="row justify-content-end mt-3 mr-2">
        <button className="btn btn-primary" data-toggle="modal" data-target="#movieModal">
            <i className="fa fa-plus mr-2"></i> Add Movie
        </button>
        <AddMovieForm addMovie={addMovie}/>
    </div>
);

export default AddMovieButton;
