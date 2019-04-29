import React from 'react';

import movies from '../../data/exampleData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }

  render() {
    return (
      <div>
        <Search />
        <div className="movie-list">
          <MovieList movies={movies} />
        </div>
      </div>
    );
  }
}

export default App;