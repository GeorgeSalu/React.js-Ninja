'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({text}, {color}) => (
  <li style={{ background: color }}>{text}</li>
)

/* class Message extends Component {
  render() {
    return (
      <li style={{ background: this.context.color }}>{this.props.text}</li>
    )
  }
} */

Message.contextTypes = {
  color: PropTypes.string
}

export default Message
