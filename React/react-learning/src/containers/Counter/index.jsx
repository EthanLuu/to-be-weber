import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
} from '../../redux/actions/counter'
import React, { Component } from 'react'
import { Radio, Button, Divider } from 'antd'
import './index.css'

class Counter extends Component {
  increment = () => {
    const { value } = this.selectedNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectedNumber
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    if (this.props.count % 2 === 1) {
      const { value } = this.selectedNumber
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.selectedNumber
      this.props.increment(value * 1)
    }, 500)
  }
  render() {
    const onChange = (e) => {
      this.selectedNumber.value = e.target.value
    }
    return (
      <div>
        <h2>
          Current Number: {this.props.count}, Person Number:
          {this.props.persons.length}
        </h2>
        <Radio.Group onChange={onChange} ref={(c) => (this.selectedNumber = c)}>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
        </Radio.Group>
        <div className="btn-group">
          <Button onClick={this.increment}> + </Button>
          <Button onClick={this.decrement}> - </Button>
          <Button onClick={this.incrementIfOdd}>Add if Odd</Button>
          <Button onClick={this.incrementAsync}>Add by Async</Button>
        </div>
        <Divider />
      </div>
    )
  }
}

export default connect(
  (state) => ({ count: state.counter, persons: state.persons }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
  }
)(Counter)
