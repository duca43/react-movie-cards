import React, { useState } from 'react';

const AddMovieForm = ({addMovie}) => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    
    const submit = () => {

        const form = $("#movieForm")[0];

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return;
        }

        let idCounter = localStorage.getItem('idCounter');

        if (!idCounter) {
            idCounter = JSON.parse(localStorage.getItem('movies')).length;
            localStorage.setItem('idCounter', idCounter);
        }

        idCounter = parseInt(idCounter, 10) + 1;
        const movie = {
            id: idCounter * 100,
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            ratings: []
        }

        localStorage.setItem('idCounter', idCounter);

        addMovie(movie);

        //reset both form and state
        form.reset();
        setTitle('')
        setSubtitle('')
        setImageUrl('')
        setDescription('')

        $('#movieModal').modal('hide');
    };

    return (
        <div className="modal fade" id="movieModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add movie</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="movieForm" noValidate>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-4 col-form-label">Title:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="title" onInput={(e) => setTitle(e.target.value) } required/>
                                    <div className="invalid-feedback">Please enter a movie title.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="subtitle" className="col-sm-4 col-form-label">Subtitle:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="subtitle" onInput={(e) => setSubtitle(e.target.value) } required/>
                                    <div className="invalid-feedback">Please enter a movie subtitle.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="imageUrl" className="col-sm-4 col-form-label">URL to image:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="imageUrl" onInput={(e) => setImageUrl(e.target.value) } required/>
                                    <div className="invalid-feedback">Please enter a URL to movie cover.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-4 col-form-label">Description:</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" id="description" onInput={(e) => setDescription(e.target.value) } required/>
                                    <div className="invalid-feedback">Please enter a movie description.</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={() => submit()}>Add</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;
