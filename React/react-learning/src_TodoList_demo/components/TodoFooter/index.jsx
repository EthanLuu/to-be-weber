import React, { Component } from 'react'
import './index.css'

export default class TodoFooter extends Component {
  checkAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  handleDelete = () => {
    this.props.deleteAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCnt = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0)
    }, 0)
    const total = todos.length
    return (
      <div className="footer">
        <input
          type="checkbox"
          checked={doneCnt === total && total > 0}
          onChange={this.checkAll}
        />
        <span>已完成{doneCnt}</span>
        <span>总计{total}</span>
        <button onClick={this.handleDelete}>清除选中任务</button>
      </div>
    )
  }
}
