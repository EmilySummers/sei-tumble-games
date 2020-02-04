import React from 'react'
import axios from 'axios'
import 'bulma'

import Card from './Card'

class Index extends React.Component {
  state = {
    games: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/games')
      this.setState({ games: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.games.map(game => (
              <Card key={game._id} {...game} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Index