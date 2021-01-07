import React from "react";
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist'

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <TrackList playlistTracks={this.props.playlistTracks}/>
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;