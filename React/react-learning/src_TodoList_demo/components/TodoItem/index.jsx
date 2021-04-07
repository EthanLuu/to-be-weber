import React, { Component } from 'react'
import './index.css'
export default class TodoItem extends Component {
  state = {
    mouse: false,
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    return () => {
      if (window.confirm('确认删除吗？')) {
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        className="item"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span className="todo">{name}</span>
        </label>
        <button
          onClick={this.handleDelete(id)}
          className="del-btn"
          style={mouse ? { display: 'flex' } : { display: 'none' }}
        >
          完成
        </button>
      </li>
    )
  }
}
