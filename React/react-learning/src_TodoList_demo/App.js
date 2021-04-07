import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '学习', done: false },
    ],
  }

  addTodo = (todo) => {
    const { todos } = this.state
    this.setState({ todos: [todo, ...todos] })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkAll = (flag) => {
    const { todos } = this.state
    console.log(1)
    const newTodos = todos.map((todo) => {
      return { ...todo, done: flag }
    })
    this.setState({ todos: newTodos })
  }

  deleteAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="container">
        <TodoHeader addTodo={this.addTodo} />
        <TodoList
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFooter
          todos={todos}
          checkAll={this.checkAll}
          deleteAllDone={this.deleteAllDone}
        />
      </div>
    )
  }
}
