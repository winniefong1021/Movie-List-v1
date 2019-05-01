import React from 'react';

import Movie from './Movie.jsx';

var count = 0;

var MovieList = (props) => (
  <table>
    <tbody>
      {props.movies.movies.map(movie => <Movie movie={movie} key={count++} />)}
    </tbody>
  </table>
);

export default MovieList;