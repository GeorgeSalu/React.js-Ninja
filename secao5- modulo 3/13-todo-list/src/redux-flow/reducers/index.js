'use strict'

//import { combineReducers } from 'redux'
import reducerTodos from './todos'
import reducerVisibilityFilter from './visibility-filter'

const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return {
      ...nextState,
      [key]: reducers[key](state[key], action)
    }
  }, {})
}

export default combineReducers({
  todos,
  visibilityFilter
})
