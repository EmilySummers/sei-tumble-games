import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    }, errors: {}
  }

  handleChange = (e) => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [name]: '' }
    console.log(this.state.data)
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      this.props.history.push('/games') //! this runs even when post request returns error
    } catch (err) {
      console.log('catch has run')
      this.setState({ errors: 'Incorrect credentials' })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="title">Login</h2>
              <div className="field">
                <input onChange={this.handleChange} className="input" name="email" type="email" placeholder="Email" />
              </div>
              {this.state.errors.email && <small className="is-danger">{this.state.errors.email}</small>}
              <div className="field">
                <input onChange={this.handleChange} className="input" name="password" type="password" placeholder="Password" />
              </div>
              {this.state.errors.password && <small className="is-danger">{this.state.errors.password}</small>}
              <div className="field">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login