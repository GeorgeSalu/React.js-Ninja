'use strict'

import { TOGGLE_TODO, ADD_TODO } from './actions'

export const initialState = []

const todos = createReducer(initialState, {
  [ADD_TODO]: () => {
    return state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    })
  },
  [TOGGLE_TODO]: () => {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) {
        return todo
      }

      return {
        ...todo,
        completed: !todo.completed
      }
    })
  }
})


export default todos
