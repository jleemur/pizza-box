import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Pizza-Box">
        <header className="App-header">
          <span>
            <img src={require('./pizzabox.png')} className="App-logo" />
          </span>
          <h1 className="App-title">Pizza-Box</h1>
        </header>
        <Start />
      </div>
    );
  }
}
// //////////////////////////////////////////////////////////

class Start extends React.Component {
// NEEED TO FIGURE THIS OUT LOLOL


  // constructor(props) {
  //   super(props);
  //   this.handleStartClick = this.handleStartClick.bind(this);
  //   this.handleAddPlayersClick = this.handleAddPlayersClick.bind(this);
  //   this.state = { isStart: false };
  // }

  // handleStartClick() {
  //   this.setState({ isStart: true });
  // }

  // handlePlayersClick() {
  //   this.setState({ addPlayers: false });
  // }

  render() {
  //   const isStart = this.state.isStart;

  //   if (isStart) {
  //     button = <AddPlayersButton onClick={this.handleAddPlayersClick} />;
  //   } else {
  //     button = <StartButton onClick={this.handleStartClick} />;
  //   }

    return (
      <button className="Start" onClick={e => this.handleClick(e)}>
        Start Game!
      </button>
    );
  }
}


export default App;

// /////////////////////////////////////////////////////////////
