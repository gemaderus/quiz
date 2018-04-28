import React, { Component } from 'react'
import RankingItem from './ranking-item'
import './ranking-list.css'

class RankingList extends Component {
  render() {
    return (
      <ul className="ranking-list">
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
      </ul>
    )
  }
}

export default RankingList
