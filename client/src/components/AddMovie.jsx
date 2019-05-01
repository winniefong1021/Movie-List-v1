import React from 'react';

var AddMovie = (props) => (
  <form>
    <input className="add-field" placeholder="Add Movie Title Here" onChange={(event) => { props.handleMovieInput(event) }}></input>
    <input className="add-button" type="submit" value="Add" onClick={(event) => { props.handleAddMovie(event) }}></input>
  </form>
);

export default AddMovie;