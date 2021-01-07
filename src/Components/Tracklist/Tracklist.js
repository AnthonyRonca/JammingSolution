import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    if (!this.props.tracks) {
      return <span>Loading...</span>;
    }
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}
export default TrackList;
