import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
export default class App extends Component {
  message = [
    {
      id: '01', message: 'hello'
    },
    {
      id: '02', message: 'world'
    },
    {
      id: '03', message: 'ms'
    },
  ]
  render() {
    return (
      <div>
        <header>
          <h2>Router Demo</h2>
        </header>
        <div className="links">

          {
            this.message.map((item) => {
              return (
                <div className="nav">
                  <NavLink to={`/home/${item.id}`}>{`home${item.id}`}</NavLink>
                </div>
              )
            })
          }

          <NavLink to="/about">About</NavLink>
        </div>

        <div className="container">
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Redirect to='/home' />
        </div>
      </div>
    )
  }
}
