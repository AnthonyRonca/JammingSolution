import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/ SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Ain't no rest for the Wicked",
          artist: "Cage The Elephant",
          album: "Something",
          id: 1,
        },
        {
          name: "Float On",
          artist: "Modest Mouse",
          album: "Something",
          id: 2,
        },
        {
          name: "Disco",
          artist: "Surf Curse",
          album: "Something",
          id: 3,
        },
      ],
      playlistName: "Your Liked Songs",
      playlistTracks: [
        {
          name: "Molasses",
          artist: "Hiatus Kaiyote",
          album: "Baboon",
          id: 3,
        },
        {
          name: "$$$",
          artist: "Vundabar",
          album: "Smell Smoke",
          id: 4,
        },
        {
          name: "Back to School",
          artist: "A Great Big Pile of Leaves",
          album: "You're Always On My Mind",
          id: 5,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(newTrack) {
    let isDuplicate = false;
    this.state.playlistTracks.forEach((track) => {
      if (track.id === newTrack.id) {
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      console.log("Track added: " + newTrack.name);
      this.state.playlistTracks.push(newTrack);
    }
    this.setState({ playlistTracks: this.state.playlistTracks });
  }
  removeTrack(trackToRemove) {
    let isFound = false;
    this.state.playlistTracks.forEach((track) => {
      if (track.id === trackToRemove.id) {
        isFound = true;
      }
    });
    if (isFound) {
      console.log("Track Removed: " + trackToRemove.name);
      this.state.playlistTracks.pop(trackToRemove);
    }
    this.setState({ playlistTracks: this.state.playlistTracks });
  }
  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }
  search(criteria) {
    console.log(criteria);
    // Open hook for Spotify API
  }
  updateSearchResults() {}
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
