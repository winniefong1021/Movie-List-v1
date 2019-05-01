import React from 'react';

var Watched = (props) => (
  <div id="toggle-watch">
    <button className="watched">Watched</button>
    <button className="to-watch">To Watch</button>
  </div>
);

export default Watched;

// when toggleStatus is true, button turns green
// when movie gets added to movie list => to watch
// set up each movie to have a watched property in movie list
  // once clicked, movie goes to watched list
  // click again, movie goes to to watch list