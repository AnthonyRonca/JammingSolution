import React from 'react';
import './SearchResults.css'
import TrackList from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
  render() {
    const searchResults = this.props.searchResults;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={searchResults}/>
      </div>
    );
  }
}

export default SearchResults;