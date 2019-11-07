'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import after3s from './after3s'

class Message extends Component {

  render () {
    return this.state.loading ? <div>Carregando....</div> : (
      <li style={{ background: this.props.store.color }}>
        {this.props.text}
        <button onClick={this.props.store.setColor(this.props.color)}>Change color</button>
      </li>
    )
  }
}

export default after3s(Message)
