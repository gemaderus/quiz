import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <h1 className="home-title">Cuantos sabes de Diversidad</h1>
        <p className="App-intro">
          Un test sobre diferentes preguntas...
        </p>
        <ul>
          <li>
            <button onClick={e => this.props.select('trivia')}>Quiero empezar el quiz</button>
          </li>
          <li>
            <button onClick={e => this.props.select('ranking')}>Quiero ver la puntuación</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;