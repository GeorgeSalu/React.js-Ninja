'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      color: 'purple'
    }

    this.setColor = (color, update) => (e) => {
      this.store.color = color
      update()
    }

    this.store = {
      color: 'purple',
      setColor: this.setColor
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
