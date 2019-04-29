import React from 'react';

import Movie from './Movie.jsx';

var MovieList = (props) => (
  <table>
    <tbody>
      {props.movies.movies.map(movie => <Movie movie={movie} />)}
    </tbody>
  </table>
);

export default MovieList;