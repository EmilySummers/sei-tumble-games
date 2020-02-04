import React from 'react'
import axios from 'axios'

class Show extends React.Component {
  state = {
    game: {}
  }

  async componentDidMount() {
    const gameId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/games/${gameId}`)
      this.setState({ game: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { name, image, year, description, minPlayers, maxPlayers, duration, age, boardImage } = this.state.game
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop is-full-mobile">
              <img src={image} alt={name} />
            </div>
            <div className="column is-half-desktop is-full-mobile">
              <h2 className="title is-2">{name}</h2>
              <h3 className="subtitle is-5">{year}</h3>
              <p>{description}</p>
              <div>
                <p className="subtitle is-5">{minPlayers} - {maxPlayers} players</p>
                <p className="subtitle is-5">{duration} mins</p>
                <p className="subtitle is-5">{age}+</p>
              </div>
              <div className="wrapper"></div>
              <div className="gameboard" style={{ backgroundImage: `url('${boardImage}')` }} />
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Show