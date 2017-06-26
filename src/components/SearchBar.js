import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey: ''
    }
  }

  searchHandle = (e) => {
    this.setState({
      searchKey: e.target.value
    });

    this.props.search(e.target.value);
  }

  render() {
    return (
      <input type="text" className="search-bar" onChange={this.searchHandle} value={this.state.searchKey} />
    );
  }
}

export default SearchBar;
