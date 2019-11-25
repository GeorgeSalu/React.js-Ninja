'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from 'reducers'

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

const store = createStore(reducer, applyMiddleware(logger, thunk))

store.dispatch(lazyAction())

function lazyAction() {
  return (dispatch) => {
    dispatch({
      type: 'todos:ADD_TODO',
      payload: {
        text: 'Lazy Action',
        id: '123'
      }
    })
  }
}

const renderState = () => {
  console.log('state:', store.getState())
}

store.subscribe(renderState)
renderState()

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })

  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers').default
    store.replaceReducer(nextReducer)
  })
}
