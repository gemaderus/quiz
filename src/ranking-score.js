import React, { Component } from 'react'
import './ranking-score.css'

class RankingScore extends Component {
  render() {
    return (
      <div className="score-holder text-center">
        <header className="flex-end">
          <button className="btn">
            <svg width="22" height="22">
              <path
                d="M22 2.2L19.8 0 11 8.8 2.2 0 0 2.2 8.8 11 0 19.8 2.2 22l8.8-8.8 8.8 8.8 2.2-2.2-8.8-8.8z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </header>
        <div className="score-content">
          <div className="score-intro">
            <div className="rounded rounded-lg bg-gold flex-align-center">181</div>
            <h4>Preguntas acertadas</h4>
          </div>
          <h1 className="score-message">Lo has hecho muy bien</h1>
        </div>
        <div className="score-action">
          <input type="text" className="full" />
          <button className="btn btn-blue full">Enviar al ranking</button>
        </div>
      </div>
    )
  }
}

export default RankingScore
