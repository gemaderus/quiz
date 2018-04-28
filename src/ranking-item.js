import React, { Component } from 'react'

class RankingItem extends Component {
  render() {
    return (
      <li className="ranking-list-item">
        <div className="flex-center">
          <div className="position-counter flex-align-center rounded rounded-sm rounded-position bg-blue">
            <span className="position-number">4</span>
          </div>
          <div className="position-info">
            <h3>Marta López Collantes</h3>
          </div>
        </div>
      </li>
    )
  }
}

export default RankingItem
