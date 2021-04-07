import React, { Component } from 'react'
import Counter from './containers/Counter'
import store from './redux/store'
import Person from './containers/Person'
import { Provider } from 'react-redux'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Counter />
          <Person />
        </Provider>
      </div>
    )
  }
}
