import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h3>Top 3 ranking</h3>
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
    )
  }
}

export default Header
