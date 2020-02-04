import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Show from './components/games/Show'
import New from './components/games/New'
import Index from './components/games/Index'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/games/new" component={New} />
        <Route path="/games/:id" component={Show} />
        <Route path="/games" component={Index} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
