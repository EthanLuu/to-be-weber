import React, { Component } from 'react'
import Reflv from 'reflv'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Reflv url={`http://localhost/api1/live/test.flv`} type="flv" isLive />
      </div>
    )
  }
}
