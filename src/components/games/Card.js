import React from 'react'
import 'bulma'
import { Link } from 'react-router-dom'


const Card = ({ name, image, year, minPlayers, maxPlayers, age, duration, _id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/games/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">{name}</h2>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h3>{year}</h3>
          <h3>{minPlayers} - {maxPlayers} players</h3>
          <h3>{duration} mins</h3>
          <h3>{age}+</h3>
        </div>
      </div>
    </Link>
  </div>
)

export default Card