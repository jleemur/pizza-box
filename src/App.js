import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'players' };
    // this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  render() {
    if (this.state.page == 'home') {
      return <Home />;
    } else if (this.state.page == 'players') {
      return <Players />;
    } else if (this.state.page == 'game') {
      return <Game />;
    }
  }
}
// //////////////////////////////////////////////////////////

class Home extends React.Component {
  render() {
    return (
      <div className="Pizza-Box">
        <header className="App-header">
          <span>
            <img src={require('./pizzabox.png')} className="App-logo" />
          </span>
          <h1 className="App-title">Pizza-Box</h1>
        </header>
      </div>
    );
  }
}

class Players extends React.Component {
  render() {
    return (
      <div className="Pizza-Box">
        <header className="App-header">
          <span>
            <img src={require('./pizzabox.png')} className="App-logo" />
          </span>
          <h1 className="App-title">Pizza-Box</h1>
        </header>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="Pizza-Box">
        <header className="App-header">
          <span>
            <img src={require('./pizzabox.png')} className="App-logo" />
          </span>
          <h1 className="App-title">Pizza-Box</h1>
        </header>
      </div>
    );
  }
}


export default App;

// /////////////////////////////////////////////////////////////
