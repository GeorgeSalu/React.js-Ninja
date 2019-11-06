'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'purple'
    }

    this.setColor = (color) => {
      this.setState({ color })
    }
  }

  getChildContext () {
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }

  render () {
    return (
      <MessageList
        messages={[
          { text: 'hey' },
          { text: 'ho' },
          { text: 'lets go' }
        ]}
      />
    )
  }
}

App.childContextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
}

export default App
