import React, { Component } from 'react'
import './ranking-position.css'

class RankingPosition extends Component {
  render() {
    return (
      <div className="flex-center position-holder">
        <div className="position-counter rounded rounded-sm flex-align-center rounded-position bg-blue">
          <span className="position-number">385</span>
        </div>
        <div className="position-info">
          <h5>Tu posición actual</h5>
          <h3>Adrián García Pérez</h3>
        </div>
      </div>
    )
  }
}

export default RankingPosition
