import React, { Component } from 'react'

const data = [
  {
    id: '01', content: 'Ethan'
  },
  {
    id: '02', content: 'Echo'
  },
  {
    id: '03', content: 'Elisa'
  },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          Home
        </div>
      </div>
    )
  }
}


