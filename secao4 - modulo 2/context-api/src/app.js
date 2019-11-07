'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

    const subscriptions = []
    const subscribe = (f) => {
      subscriptions.push(f)
      return () => subscriptions.filter((func) => func !== f)
    }

    const setColor = (color) => (e) => {
      this.store.color = color
      subscriptions.forEach(f => f())
    }

    this.store = {
      color: 'purple',
      setColor,
      subscribe
    }
  }

  getChildContext () {
    return {
      store: this.store
    }
  }

  render () {
    return (
      <MessageList
        messages={[
          { text: 'hey', color: 'orange' },
          { text: 'ho', color: 'blue' },
          { text: 'lets go', color: 'yellow' }
        ]}
      />
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object
}

export default App
