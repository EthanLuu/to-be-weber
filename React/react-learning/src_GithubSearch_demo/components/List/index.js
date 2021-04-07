import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
  render() {
    return (
      <div className="list-container">
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className="card">
              <a href={user.html_url}>
                <img className="user-avartar" src={user.avatar_url} alt="" />
              </a>
              <span className="user-name">{user.login}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
