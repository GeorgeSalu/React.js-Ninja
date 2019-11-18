'use strict'

import { combineReducers } from 'redux'
import reducerTodos from './todos'
import reducerVisibilityFilter from './visibility-filter'

/*
const rootReducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
  }
}*/

export default combineReducers({
    todos: reducerTodos,
    visibilityFilter: reducerVisibilityFilter
})
