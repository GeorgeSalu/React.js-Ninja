'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  getChildContext() {
    return {
      color: 'purple'
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
  color: PropTypes.string
}

export default App
