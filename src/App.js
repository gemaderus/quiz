import React, { Component } from 'react';
import Home from './home';
import Dashboard from './dashboard';
import Ranking from './ranking';
import './App.css';
import * as firebase from 'firebase';
import 'firebase/database';
import flamelink from 'flamelink';

class App extends Component {
  state = {
    path: 'home'
  }

  constructor(props) {
    super()
    var firebaseConfig = {
      apiKey: "AIzaSyCxCI-dPd8qifWuKdLp32kLplI27smbUWg",
      authDomain: "bbva-2721a.firebaseapp.com",
      databaseURL: "https://bbva-2721a.firebaseio.com",
      projectId: "bbva-2721a",
      storageBucket: "bbva-2721a.appspot.com",
      messagingSenderId: "146691531247"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const app = flamelink({ firebaseApp });
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
