import React, { Component } from 'react'
import Header from './header'
import RankingTop from './ranking-top'
import RankingPosition from './ranking-position'
import './ranking-complete.css'

class Ranking extends Component {
  render() {
    return (
      <div className="ranking-complete">
        <Header />
        <RankingTop className="mb-10" />
        <RankingPosition />
      </div>
    )
  }
}

export default Ranking
