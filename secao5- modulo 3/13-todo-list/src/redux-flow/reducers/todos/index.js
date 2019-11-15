'use strict'

const initialState = []

const todos = (state, action) => {

  return state.concat({
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  })
}

export default todos
