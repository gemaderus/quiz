import React, { Component } from 'react'
import Header from './header'
import RankingTop from './ranking-top'
import RankingPosition from './ranking-position'
import RankingList from './ranking-list'
import './ranking-complete.css'

class RankingComplete extends Component {
  render() {
    return (
      <div className="ranking-complete">
        <Header />
        <RankingTop className="mb-10" />
        <RankingList />
        <RankingPosition />
      </div>
    )
  }
}

export default RankingComplete
