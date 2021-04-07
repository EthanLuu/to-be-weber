import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List } from 'antd'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  add = () => {
    const name = this.name.input.value
    const age = this.age.input.value
    const person = {
      id: nanoid(),
      name,
      age,
    }
    this.props.addPerson(person)
  }
  render() {
    return (
      <div className="person-container">
        <h2>Add Person</h2>
        <Input ref={(c) => (this.name = c)} placeholder="请输入姓名" />
        <Input ref={(c) => (this.age = c)} placeholder="请输入年龄" />
        <Button onClick={this.add}>Add</Button>

        <div className="list">
          <List
            dataSource={this.props.persons}
            renderItem={(item) => (
              <List.Item>
                name: {item.name}, age: {item.age}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    persons: state.persons,
  }),
  { addPerson: createAddPersonAction }
)(Person)
