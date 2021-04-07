import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class TodoHeader extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13 || target.value.trim() === '') return
    const todo = {
      id: nanoid(),
      name: target.value,
    }
    this.props.addTodo(todo)
    target.value = ''
  }
  render() {
    return (
      <div className="header">
        <input
          type="text"
          className="enter"
          placeholder="请输入你的日程安排，回车确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}
