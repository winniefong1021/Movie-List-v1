import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({});
  }

  render() {
    return (
      <form>
        <input className="search-field" placeholder="Search..."></input>
        <input className="search-button" type="submit" value="Go!"></input>
      </form>
    );
  }
}

export default Search;