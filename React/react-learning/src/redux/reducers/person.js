import { ADD_PERSON } from '../constant'

const initState = [
  { id: 1, name: 'ethan', age: 21 },
  { id: 2, name: 'echo', age: 20 },
  { id: 3, name: 'elisa', age: 20 },
]
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
