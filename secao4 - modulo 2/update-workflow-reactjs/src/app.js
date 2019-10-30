'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = { counter: 0 }
  }

  componentDidMount () {
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    const { counter } = this.state
    return (
      <div>counter: {counter}</div>
    )
  }
}

export default App
