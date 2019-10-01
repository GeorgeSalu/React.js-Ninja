'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div >
        {this.state.showTimer && <Timer />}

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>
          Show / Hide timer
        </button>
      </div>
    )
  }
}

export default App