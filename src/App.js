import React, { Component } from 'react'
import Home from './home'
import Dashboard from './dashboard'
//import RankingComplete from './ranking-complete'
import RankingScore from './ranking-score'
import './App.css'

class App extends Component {
  state = {
    path: 'home'
  }

  selectPath = path => {
    this.setState({
      path: path
    })
  }

  render() {
    const { path } = this.state

    return (
      <div className="container text-center">
        {path === 'home' ? <Home select={this.selectPath} /> : null}
        {path === 'trivia' ? <Dashboard select={this.selectPath} /> : null}
        {path === 'ranking' ? <RankingScore select={this.selectPath} /> : null}
      </div>
    )
  }
}

export default App
