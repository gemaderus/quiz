import React, { Component } from 'react';
import Home from './home';
import Dashboard from './dashboard';
import Ranking from './ranking';
import './App.css';

class App extends Component {
  state = {
    path: 'home'
  }

  selectPath = (path) =>{
    this.setState({
      path: path
    })
  }

  render() {
    const {path} = this.state;

    return (
      <div className="container">
        {path === 'home' ?
          <Home select={this.selectPath}/>
        : null }
        {path === 'trivia' ?
          <Dashboard select={this.selectPath} />
         : null}

        {path === 'ranking' ?
          <Ranking select={this.selectPath} />
        : null}
      </div>
    );
  }
}

export default App;
