import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
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
          id: 2 
        },
        { 
          name: "Disco", 
          artist: "Surf Curse", 
          album: "Something", 
          id: 3 
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
