import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      chirp: '',
      nameFull: false,
      chirpFull: false,
    }
  }
  ClickToChrip = () => {
    if (this.state.chirpFull) {
      if (this.state.nameFull) {
        var div = document.getElementById("NewPost")
        var h2 = document.createElement("h2")
        var h4 = document.createElement("h4")
        var n = document.createTextNode(this.state.name + " - Just Now");
        var t = document.createTextNode(this.state.chirp);
        h2.appendChild(n);
        h4.appendChild(t);
        div.prepend(h4);
        div.prepend(h2)
        this.setState({ chirp: '' });
        this.setState({ name: '' });
        this.setState({ chirpFull: false });
        this.setState({ nameFull: false });
      } else {
        alert(`You must fill in the "Name" and "Chirp" boxes to post!`)
      }
    } else {
      alert(`You must fill in the "Name" and "Chirp" boxes to post!`)
    }
  }
  PostersName = (value) => {
    if (value !== "") {
      this.setState({ name: value });
      this.setState({ nameFull: true })
    } else {
      this.setState({ name: value });
      this.setState({ nameFull: false })
    }
  }
  Chirp = (value) => {
    if (value !== "") {
      this.setState({ chirp: value });
      this.setState({ chirpFull: true })
    } else {
      this.setState({ chirp: value });
      this.setState({ chirpFull: false })
    }
  }
  render() {
    return (
      <React.Fragment>
        
        <input
          placeholder="Name"
          id="Name"
          value={this.state.name}
          onChange={(event) => this.PostersName(event.target.value)}
        />
        <input
          placeholder="Chirp Something!"
          id="Chirp"
          value={this.state.chirp}
          onChange={(event) => this.Chirp(event.target.value)}
        />
        <div>
          <button onClick={() => this.ClickToChrip()}>Chirp it up!</button>
        </div>
        <div id="NewPost"></div>
        <div></div>
        <h2>Dolan Drumph - 1 hour ago</h2>
        <h4>I defy anyone to find better memes than the ones I have. They'll regret it. I know the best people.</h4>
        <div></div>
        <h2>Dolan Drumph - Today</h2>
        <h4>I have never seen a meme. I have no idea what a meme is. Anyone who tells you I have memes is lying.</h4>
        <div></div>
        <h2>Dolan Drumph - Yesterday</h2>
        <h4>Belive me when I say I have all the best memes</h4>
        
      </React.Fragment>
    );
  }
};

export default App;
