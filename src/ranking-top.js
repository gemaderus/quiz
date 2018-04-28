import React, { Component } from 'react'
import IconTrophyGold from './icon-trophygold'
import IconTrophySilver from './icon-trophysilver'
import IconTrophyBronze from './icon-trophybronze'
import './ranking-top.css'

class RankingTop extends Component {
  render() {
    return (
      <ul className="winners">
        <li className="winner">
          <IconTrophyGold className="icon-trophy" />
          <h4 className="font-gold">Primera posición</h4>
          <h2>Luis Torres García</h2>
        </li>
        <li className="winner">
          <IconTrophyGold className="icon-trophy" />
          <h4 className="font-silver">Segunda posición</h4>
          <h2>Raúl Pérez Tomás</h2>
        </li>
        <li className="winner">
          <IconTrophyBronze />
          <h4 className="font-bronze">Tercera posición</h4>
          <h2>Marta López Collantes</h2>
        </li>
      </ul>
    )
  }
}

export default RankingTop
