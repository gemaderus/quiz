import React, { Component } from 'react'
import './home.css'
import IconPeople from './iconpeople'
import IconPhone from './iconphone'
import IconTitle from './icontitle'

class Home extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="home-hero">
          <IconPeople />
        </div>
        <h1 className="home-title">
          <IconTitle />
        </h1>
        <div className="home-content">
          <div className="home-play">
            <button className="btn btn-blue btn-play rounded" onClick={e => this.props.select('trivia')}>
              <IconPhone />
              Play
            </button>
          </div>
          <div className="home-ranking">
            <button className="btn" onClick={e => this.props.select('ranking')}>
              ¿Quien va ganando?
            </button>
          </div>
        </div>
        <footer className="footer">Nuevas preguntas añadidas el 12 de Marzo de 2018</footer>
      </div>
    )
  }
}

export default Home
