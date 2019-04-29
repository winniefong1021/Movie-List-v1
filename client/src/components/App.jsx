import React from 'react';

import movies from '../../data/exampleData.js';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        <MovieList movies={movies}/>
      </div>
    );
  }
}

export default App;