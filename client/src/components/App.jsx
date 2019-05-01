import React from 'react';

import movies from '../../data/exampleData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      searchInput: '',
      movieList: movies,
    });

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(event) {
    var input = event.target.value

    this.setState({
      searchInput: input,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    var movies = this.state.movieList.movies;
    var input = this.state.searchInput.toLowerCase();

    var filteredMovies = movies.filter(movie => {
      var movieTitle = movie.title.toLowerCase();
      if (movieTitle.includes(input)) {
        return movie;
      }
    });

    this.setState({
      movieList: { movies: filteredMovies },
    });

    // Bonus: Handle the case of "no movie by that name found" gracefully.
    // Be able to re-search movie list

    console.log('search submitted: ', input);
  }

  render() {
    return (
      <div>
        <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} />
        <div className="movie-list">
          <MovieList movies={this.state.movieList} />
        </div>
      </div>
    );
  }
}

export default App;