'use strict'

export default (state, action) => {
  switch(action.type) {
    case 'ADD_COUNTER':
      return state.concat(0)
    case 'REMOVE_COUNTER':
      return [0,2]
  }
}
