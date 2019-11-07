'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

    let subscriptions = []

    // higher order function
    const subscribe = (f) => {
      subscriptions.push(f)
      return () => {
        subscriptions = subscriptions.filter((func) => func !== f)
      }
    }

    // higher order function
    const setColor = (color) => (e) => {
      this.store.color = color
      subscriptions.forEach(f => {
        console.log('subscripton')
        f()
      })
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
