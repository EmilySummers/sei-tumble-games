import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
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
      await axios.post('/api/register', this.state.data)
      console.log(this.state.data) 
      this.props.history.push('/login') //! this runs even when post request returns error
    } catch (err) {
      console.log('catch has run')
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="title">Register</h2>
              <div className="field">
                <input onChange={this.handleChange} className="input" name="username" placeholder="Username" />
              </div>
              {this.state.errors.username && <small className="is-danger">{this.state.errors.username}</small>}
              <div className="field">
                <input onChange={this.handleChange} className="input" name="email" type="email" placeholder="Email" />
              </div>
              {this.state.errors.email && <small className="is-danger">{this.state.errors.email}</small>}
              <div className="field">
                <input onChange={this.handleChange} className="input" name="password" type="password" placeholder="Password" />
              </div>
              {this.state.errors.password && <small className="is-danger">{this.state.errors.password}</small>}
              <div className="field">
                <input onChange={this.handleChange} className="input" name="passwordConfirmation" type="password" placeholder="Confirm Password" />
              </div>
              {this.state.errors.passwordConfirmation && <small className="is-danger">{this.state.errors.passwordConfirmation}</small>}
              <div className="field">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register