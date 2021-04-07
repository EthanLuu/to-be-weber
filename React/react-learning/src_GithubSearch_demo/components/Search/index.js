import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class Search extends Component {
  search = () => {
    const {
      keyWordElem: { value: keyWord },
    } = this
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (response) => this.props.saveUsers(response.data.items),
      (error) => console.log('error', error)
    )
  }
  render() {
    return (
      <div className="search">
        <h2>Github Search</h2>
        <div>
          <input type="text" ref={(c) => (this.keyWordElem = c)} />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }
}
