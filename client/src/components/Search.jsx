import React from 'react';

var Search = (props) => (
  <form>
    <input className="search-field" placeholder="Search..." onChange={(event) => { props.handleSearchInput(event) }}></input>
    <input className="search-button" type="submit" value="Go!" onClick={(event) => { props.handleSearchSubmit(event) }}></input>
  </form>
);

export default Search;
