import { createStore, combineReducers } from 'redux'
import counter_reducer from './reducers/counter'
import person_reducer from './reducers/person'

const reducers = combineReducers({
  counter: counter_reducer,
  persons: person_reducer,
})
const store = createStore(reducers)

export default store
