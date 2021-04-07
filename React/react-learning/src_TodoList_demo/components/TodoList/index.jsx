import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import './index.css'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  render() {
    const { todos } = this.props
    return (
      <div className="list">
        <ul>
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                {...item}
                updateTodo={this.props.updateTodo}
                deleteTodo={this.props.deleteTodo}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
