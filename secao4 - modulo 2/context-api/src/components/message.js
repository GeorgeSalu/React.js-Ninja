'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  render() {
    return (
      <li style={{ background: this.context.color }}>
        {this.props.text}
        <button onClick={() => this.context.setColor('orange')}>Change color</button>
        <button onClick={() => {this.updated = 'atualizou'; this.forceUpdate()}}>Forcar atualizacao: {this.updated}</button>
      </li>
    )
  }
}

Message.contextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
}

export default Message
