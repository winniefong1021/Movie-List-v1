import React from 'react';

import { movies } from '../../data/exampleData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      searchInput: '',
      addMovie: '',
      movieList: movies,
    });

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchInput(event) {
    var input = event.target.value
    this.setState({
      searchInput: input,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    var movies = this.state.movieList;
    var input = this.state.searchInput.toLowerCase();

    var filteredMovies = movies.filter(movie => {
      var movieTitle = movie.title.toLowerCase();
      if (movieTitle.includes(input)) {
        return movie;
      }
    });

    this.setState({
      movieList: filteredMovies,
    });

    // Bonus: Handle the case of "no movie by that name found" gracefully.
    // Be able to re-search movie list
    // once submitted, clear out input in form

    console.log('search submitted: ', input);
  }

  handleMovieInput(event) {
    var input = event.target.value
    this.setState({
      addMovie: input,
    });
  }

  handleAddMovie(event) {
    event.preventDefault();

    var input = this.state.addMovie;
    var movieObj = { title: input };
    this.state.movieList.unshift(movieObj);

    this.setState({
      movieList: this.state.movieList,
    });

    // fix issue of not having added movies come back after refresh
    // once submitted, clear out input in form

    console.log('add movie submitted: ', input);
  }

  render() {
    return (
      <div>
        <AddMovie handleMovieInput={this.handleMovieInput} handleAddMovie={this.handleAddMovie} />
        <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} />
        <div className="movie-list">
          <MovieList movies={this.state.movieList} />
        </div>
      </div>
    );
  }
}

export default App;