'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from 'reducers'

const initialState = {
  todos: [{
    text: 'auto',
    id: 1,
    completed: true
  }],

  address: {
    address: 'rua tal',
    city: 'cidade',
    state: 'pr'
  }
}

const store = createStore(reducer, initialState)

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
}
