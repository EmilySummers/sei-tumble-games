import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Tumble</Link>
            <Link className="navbar-item" to="/games">Games</Link>
            <Link className="navbar-item" to="/register">Register</Link>
            <Link className="navbar-item" to="/login">Login</Link>
            <Link className="navbar-item" to="/games/new">Add a game</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar