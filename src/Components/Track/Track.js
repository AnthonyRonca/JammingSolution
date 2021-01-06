import React from "react";
import './Track.css';

class Track extends React.Component {
    renderAction(){
        if(this.props.isRemoval) {
            return <button className="track-action">-</button>
        } else {
            return <button className="track-action">+</button>
        }
    }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Track Artist | Track Album</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
