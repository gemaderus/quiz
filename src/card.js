import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="quiz">
          <h2>Pregunta</h2>
          <ul>
            <li>
              <button>Respuesta 1</button>
            </li>
            <li>
              <button>Respuesta 2</button>
            </li>
            <li>
              <button>Respuesta 3</button>
            </li>
          </ul>
        </div>
        <div className="results">
          <div className="answer-right">
            <i className="icon">Icono right</i>
            <p>La respuesta es correcta</p>
          </div>
          <div className="answer-wront">
            <i className="icon">Icono wrong</i>
            <p>Ohh! Tú respuesta no es correcta</p>
          </div>
          <div className="explanation">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa natus tempora quaerat, rem inventore quos laborum debitis unde deleniti non ut doloribus itaque nisi iste cum delectus labore. Aperiam.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa natus tempora quaerat, rem inventore quos laborum debitis unde deleniti non ut doloribus itaque nisi iste cum delectus labore. Aperiam.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
