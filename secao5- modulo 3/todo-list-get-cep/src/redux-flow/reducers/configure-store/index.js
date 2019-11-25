'use strict'

import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'

export default () => {
  const store = createStore(reducer, applyMiddleware(logger, thunk))

  if(module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGGER:Will dispatch:', action)
  const nextAction = next(action)
  console.log('LOGGER:Will dispatch:', nextAction)
  return nextAction
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(dispatch)
  }
  return next(action)
}
