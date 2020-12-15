import moviesFromJson from './movies.json';

export default class MovieService {
  static getMovies() {
    let movies = JSON.parse(localStorage.getItem('movies'));
    if (!movies || movies.length === 0) {
        this.setMovies(moviesFromJson);
        return moviesFromJson;
    }
    return movies;
  }

  static setMovies(movies) {
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  static addMovie(movie) {
    let movies = this.getMovies();
    movies.push(movie);
    this.setMovies(movies);
  }
}
